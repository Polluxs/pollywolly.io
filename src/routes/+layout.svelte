<script lang="ts">
	import './layout.css';
	import Logo from '$lib/Logo.svelte';
	import { resolve } from '$app/paths';
	import { phone } from '$lib/site';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { jsonLd, siteSchema } from '$lib/schema';
	import displayFont from '@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-opsz-normal.woff2?url';
	import bodyFont from '@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-normal.woff2?url';

	let { children } = $props();

	afterNavigate(() => {
		if (browser) {
			fetch('/api/track', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					// Keep the query so ad clicks (utm_*) show up in the logs.
					page: $page.url.pathname + window.location.search,
					referrer: document.referrer || ''
				})
			}).catch(() => {});
		}
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta name="theme-color" content="#0e1117" />
	<!-- The two fonts above the fold; the rest load on demand. -->
	<link rel="preload" href={displayFont} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={bodyFont} as="font" type="font/woff2" crossorigin="anonymous" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static JSON-LD from $lib/schema, `<` escaped -->
	{@html jsonLd(siteSchema)}
</svelte:head>

<div class="min-h-screen">
	<main>
		{@render children()}
	</main>
	<footer class="bg-night px-6 pt-14 pb-28 text-snow-dim lg:pb-14">
		<div
			class="mx-auto flex max-w-6xl flex-col justify-between gap-6 text-sm sm:flex-row sm:items-end"
		>
			<div>
				<p class="text-2xl text-snow"><Logo /></p>
				<p class="mt-2">Voor ondernemers die hun tijd terug willen.</p>
				<p class="mt-4">
					Onze advertenties maken we zelf. Ook zin in reclame waar ondernemers om lachen? Vraag het
					gerust.
				</p>
			</div>
			<div class="space-y-1 sm:text-right">
				<p>
					<a href="tel:{phone.replace(/\s/g, '')}" class="-my-3 inline-block py-3 hover:text-snow"
						>{phone}</a
					>
					·
					<a href={resolve('/contact')} class="-my-3 inline-block py-3 hover:text-snow">Contact</a>
					·
					<a href={resolve('/privacy')} class="-my-3 inline-block py-3 hover:text-snow">Privacy</a>
				</p>
				<p>PollyWolly BV · Mol · BTW BE0797.231.914</p>
			</div>
		</div>
	</footer>
</div>
