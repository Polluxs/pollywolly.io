<script lang="ts">
	import './layout.css';
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
					page: $page.url.pathname,
					referrer: document.referrer || ''
				})
			}).catch(() => {});
		}
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
	<title>Thomas Dorissen</title>
	<meta
		name="description"
		content="Building stuff with data. Scraping, SEO, infra. Currently building databakkes.be and facetracker.io."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="min-h-screen bg-bg font-[Inter,sans-serif] text-text">
	<main class="mx-auto max-w-[720px] px-8 pt-24 pb-16">
		{@render children()}
	</main>
	<footer class="border-t border-border px-8 py-12">
		<div
			class="mx-auto flex max-w-[720px] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
		>
			<p class="text-sm text-text-muted">thomas dorissen</p>
			<div class="flex gap-6 text-sm text-text-muted">
				<a href="https://databakkes.be" class="transition-colors hover:text-text">databakkes.be</a>
				<a href="https://facetracker.io" class="transition-colors hover:text-text">facetracker.io</a
				>
				<a href="https://x.com/DorissenThomas" class="transition-colors hover:text-text">x</a>
			</div>
		</div>
	</footer>
</div>
