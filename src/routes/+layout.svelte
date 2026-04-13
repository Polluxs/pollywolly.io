<script lang="ts">
	import './layout.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Thomas Dorissen</title>
	<meta name="description" content="Building stuff with data. Scraping, SEO, infra. Currently building databakkes.be and facetracker.io." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen bg-bg text-text font-[Inter,sans-serif]">
	<main class="mx-auto max-w-[720px] px-8 pt-24 pb-16">
		{@render children()}
	</main>
	<footer class="border-t border-border px-8 py-12">
		<div class="mx-auto max-w-[720px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
			<p class="text-sm text-text-muted">
				thomas dorissen
			</p>
			<div class="flex gap-6 text-sm text-text-muted">
				<a href="https://databakkes.be" class="hover:text-text transition-colors">databakkes.be</a>
				<a href="https://facetracker.io" class="hover:text-text transition-colors">facetracker.io</a>
				<a href="https://x.com/DorissenThomas" class="hover:text-text transition-colors">x</a>
			</div>
		</div>
	</footer>
</div>
