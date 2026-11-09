<script lang="ts">
	import './layout.css';
	import Logo from '$lib/Logo.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';

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
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Caveat:wght@500;700&family=Atkinson+Hyperlegible+Next:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
		rel="stylesheet"
	/>
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
				<p>[telefoonnummer] · [e-mail]</p>
				<p>PollyWolly BV · Mol · BTW BE0797.231.914</p>
			</div>
		</div>
	</footer>
</div>
