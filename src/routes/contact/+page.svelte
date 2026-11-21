<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from '$lib/Logo.svelte';
	import Contact from '$lib/Contact.svelte';
	import { phone } from '$lib/site';
	import { SITE, jsonLd } from '$lib/schema';

	const contactSchema = {
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		'@id': `${SITE}/contact#webpage`,
		url: `${SITE}/contact`,
		name: 'Contact | PollyWolly',
		inLanguage: 'nl-BE',
		isPartOf: { '@id': `${SITE}/#website` },
		about: { '@id': `${SITE}/#organization` }
	};

	// `form` is only set after a submit without JavaScript; Contact shows the outcome.
	let { form } = $props();
</script>

<svelte:head>
	<title>Contact | PollyWolly</title>
	<meta
		name="description"
		content="Vertel wat er bij u vastloopt. Ik bel of mail u binnen één werkdag. Gratis, geen verplichtingen."
	/>
	<link rel="canonical" href="https://pollywolly.io/contact" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://pollywolly.io/contact" />
	<meta property="og:title" content="Contact | PollyWolly" />
	<meta
		property="og:description"
		content="Vertel wat er bij u vastloopt. Ik bel of mail u binnen één werkdag. Gratis, geen verplichtingen."
	/>
	<meta property="og:image" content="https://pollywolly.io/og.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="nl_BE" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://pollywolly.io/og.jpg" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static JSON-LD, `<` escaped -->
	{@html jsonLd(contactSchema)}
</svelte:head>

<section class="bg-ink px-6 pt-8 pb-16 text-snow sm:pb-20">
	<div class="mx-auto max-w-6xl">
		<a
			href={resolve('/')}
			class="-my-1 inline-block py-1 text-xl text-snow"
			aria-label="PollyWolly, naar de homepage"><Logo /></a
		>
		<h1 class="display mt-12 text-[clamp(2.25rem,4.4vw,3.75rem)] text-balance">
			Wat loopt er bij u <span class="text-signal">vast</span>?
		</h1>
		<p class="mt-6 max-w-2xl text-xl leading-relaxed text-snow-dim">
			Vertel het mij. Ik bel of mail u binnen één werkdag, zoals u verkiest. U spreekt mij, geen
			verkoper.
		</p>
	</div>
</section>

<section class="bg-paper-2 px-6 py-16 sm:py-20">
	<div class="mx-auto max-w-6xl">
		<Contact {phone} result={form} />
	</div>
</section>
