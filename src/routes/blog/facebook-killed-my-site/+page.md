---
title: facebook killed my site
description: How Facebook's meta-externalagent crawler caused a Node.js OOM crash on my 1.9M page SvelteKit site. A debugging post-mortem with fixes for connection pool exhaustion, slow redirects, and OFFSET pagination.
date: 2026-04-13
---

<svelte:head>

<title>Facebook killed my site - debugging a Node.js OOM caused by meta-externalagent</title>
<link rel="canonical" href="https://pollywolly.io/blog/facebook-killed-my-site" />
<meta name="description" content="How Facebook's crawler took down my 1.9M page SvelteKit site with 2 req/s of SSR. Fixes for postgres pool exhaustion, slow slug redirects, OFFSET pagination, and code lookup caching." />
<meta name="keywords" content="facebook crawler, meta-externalagent, Node.js OOM, SvelteKit SSR, postgres connection pool, keyset pagination, web performance" />
<meta property="og:title" content="Facebook killed my site" />
<meta property="og:description" content="How meta-externalagent DDoSed my 1.9M page SvelteKit site and what I did about it." />
<meta property="og:type" content="article" />
<meta property="og:image" content="https://pollywolly.io/og/facebook-killed-my-site" />
<meta property="og:image:type" content="image/svg+xml" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:image" content="https://pollywolly.io/og/facebook-killed-my-site" />
<meta property="article:published_time" content="2026-04-13" />
<meta property="article:author" content="Thomas Dorissen" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Facebook killed my site" />
<meta name="twitter:description" content="How meta-externalagent DDoSed my 1.9M page SvelteKit site at 2 req/s. A sunday debugging story." />
{@html `<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Facebook killed my site - debugging a Node.js OOM caused by meta-externalagent",
  "description": "How Facebook's crawler took down a 1.9M page SvelteKit site with 2 req/s of SSR requests.",
  "datePublished": "2026-04-13",
  "author": { "@type": "Person", "name": "Thomas Dorissen" },
  "publisher": { "@type": "Person", "name": "Thomas Dorissen" }
})}</script>`}
</svelte:head>

# facebook killed my site

*how I spent a sunday debugging an OOM and found zuckerberg at the other end*

---

I run [databakkes.be](https://databakkes.be). free lookup for **every company in Belgium**. 1.9 million pages. SvelteKit + postgres.

sunday morning. site loads like rock. so I open rock logs.

```bash
FATAL ERROR: Ineffective mark-compacts near heap limit
Allocation failed - JavaScript heap out of memory
```

> **node process: 2GB heap. dead.**
> GC pauses: 4 seconds. only one page loading. everything else: gone.

---

## step 1: find the symptom

postgres.js was throwing this:

```bash
TimeoutNegativeWarning: -93125.98 is a negative number.
Timeout duration was set to 1.
```

reconnection loop clamped to 1ms. memory goes brrr. but this was just a symptom.

---

## step 2: add logging

added one line to the hooks. logged every request.

```bash
GET /nl/0851149363 -> 301 (937ms, ua=meta-externalagent/1.1)
GET /nl/0533845834 -> 301 (902ms, ua=meta-externalagent/1.1)
GET /fr/0599815237 -> 301 (825ms, ua=meta-externalagent/1.1)
GET /fr/0868985980 -> 301 (194ms, ua=meta-externalagent/1.1)
```

> **every. single. request. facebook.**

`meta-externalagent` - crawling all 3 language versions simultaneously. **~6 requests per second. 24/7.**

and look - 6 req/s is not crazy. this is a 12 core / 48GB machine. shared between postgres, meilisearch, and SvelteKit. it should eat 6 req/s for breakfast. the problem wasn't the traffic. it was the code.

bing too. google? ignoring my site. thanks google.

---

## step 3: understand why it's so bad

each company page = **9 database queries** + SSR of **1842 lines** of svelte.

the slug redirect? **at the bottom of the load function.**

```js
// first: run ALL 9 queries
const [addresses, denominations, contacts, ...] = await Promise.all([...])

// then: oh wait, wrong slug? throw it all away lol
if (params.slug !== expectedSlug) redirect(301, '...')
```

> facebook hits `/nl/0851149363` (no slug).
> runs 9 queries. redirects. runs 9 queries again.
> **= 18 queries per bot visit. ~6 visits per second.**

---

## step 4: it gets worse

connection pool was set to **5**.

each page grabs **6+ connections** via Promise.all.

> two concurrent requests = pool saturated. everything queues.

checked pg_stat_activity:

```sql
Active queries: 43
  35x address lookups           -- bot traffic
   1x COUNT(DISTINCT nace...)   -- running for 4 MINUTES
```

the sync process ran a **massive aggregation on every deploy**. competing with bots for connections.

---

## the fixes

~~**slug redirect moved up** - was at the bottom after 9 queries. moved to the top. redirects: 3-5s -> ~100ms.~~

~~**connection pool 5 -> 50** - Promise.all grabs 6 connections per request. pool of 5 = instant saturation.~~

~~**cached 5000 NACE codes** - same static data loaded from DB on every request. now a 1-hour in-memory cache.~~

~~**keyset pagination for sitemaps** - was doing OFFSET 390,000 with a correlated subquery. 10s -> 36ms.~~

~~**sync only at midnight** - a 4-minute aggregation query was running on every deploy. competing with bot traffic.~~

all good improvements. none of them fixed it.

the real problem: **[node.js is single-threaded](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)**. SSR rendering 1842 lines of svelte takes ~600ms of CPU. while that's happening, the [event loop](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop) is blocked. every other request just sits there waiting. at 6 req/s, they pile up. `total_db` climbs from 11ms to 14 seconds - not because postgres is slow, but because node hasn't gotten around to reading the response yet.

the fix was stupid simple: **3 replicas**. three node processes, three event loops, three CPUs doing SSR in parallel.

could have also dropped SSR entirely. but I need it for SEO - the whole point is google indexing these pages. (whenever google decides to actually visit my site.)

so: 3 replicas. done.

---

## the result

```bash
# before
total_db = 14458ms    total = 14979ms    OOM every 4 hours

# after
total_db = 11ms       total = 648ms      stable
```

---

## tldr

javascript slow? add more servers.

---

<p style="text-align: center; font-size: 1.25rem;">thanks for the free load test, zuck.</p>

<img src="/zuck.png" alt="zuckerberg as a robot spamming databakkes.be" style="max-width: 350px; margin: 0 auto;" />

---

*[databakkes.be](https://databakkes.be) - free Belgian company lookup. 1.9M companies. now with 100ms redirects.*

*if you're here because meta-externalagent is destroying your server: you're not alone. check your logs. move your redirects up. cache your static data. and maybe send zuck the hosting bill. hope you're not on vercel.*

*hit me up on [X (Twitter)](https://x.com/DorissenThomas) if you have the same problem.*
