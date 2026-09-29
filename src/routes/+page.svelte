<script lang="ts">
	const posts = [
		{
			slug: 'facebook-killed-my-site',
			title: 'facebook killed my site',
			date: '2026-04-13',
			description: 'how meta-externalagent DDoSed my 1.9M page site and what I did about it'
		}
	];
</script>

<svelte:head>
	<title>Thomas Dorissen - building things with data</title>
	<link rel="canonical" href="https://pollywolly.io" />
	<meta property="og:title" content="Thomas Dorissen" />
	<meta
		property="og:description"
		content="Building stuff with data. Scraping, SEO, infra. Currently building databakkes.be and facetracker.io."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://pollywolly.io" />
</svelte:head>

<div>
	<p class="text-sm font-medium tracking-wide text-accent uppercase">Thomas Dorissen</p>
	<h1 class="mt-4 text-5xl leading-tight font-bold text-text">building things<br />with data</h1>
	<p class="mt-6 max-w-lg text-xl leading-relaxed text-text-dim">
		scraping, SEO, infra. currently building <a
			href="https://databakkes.be"
			class="text-link hover:underline">databakkes.be</a
		>
		and <a href="https://facetracker.io" class="text-link hover:underline">facetracker.io</a>.
	</p>

	<div class="mt-20">
		<p class="text-xs font-medium tracking-widest text-text-muted uppercase">writing</p>
		<div class="mt-8 space-y-10">
			{#each posts as post}
				<a href="/blog/{post.slug}" class="group block">
					<p class="font-mono text-sm text-text-muted">{post.date}</p>
					<h2
						class="mt-2 text-2xl font-semibold text-text transition-colors group-hover:text-accent"
					>
						{post.title}
					</h2>
					<p class="mt-2 text-text-dim">{post.description}</p>
				</a>
			{/each}
		</div>
	</div>
</div>
