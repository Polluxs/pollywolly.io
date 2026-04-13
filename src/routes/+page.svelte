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
	<title>Thomas Dorissen</title>
</svelte:head>

<div>
	<p class="text-accent text-sm font-medium tracking-wide uppercase">Thomas Dorissen</p>
	<h1 class="mt-4 text-5xl font-bold leading-tight text-text">building things<br />with data</h1>
	<p class="mt-6 text-xl text-text-dim leading-relaxed max-w-lg">
		scraping, SEO, infra. currently building <a href="https://databakkes.be" class="text-link hover:underline">databakkes.be</a> and <a href="https://facetracker.io" class="text-link hover:underline">facetracker.io</a>.
	</p>

	<div class="mt-20">
		<p class="text-xs font-medium uppercase tracking-widest text-text-muted">writing</p>
		<div class="mt-8 space-y-10">
			{#each posts as post}
				<a href="/blog/{post.slug}" class="block group">
					<p class="text-sm font-mono text-text-muted">{post.date}</p>
					<h2 class="mt-2 text-2xl font-semibold text-text group-hover:text-accent transition-colors">{post.title}</h2>
					<p class="mt-2 text-text-dim">{post.description}</p>
				</a>
			{/each}
		</div>
	</div>
</div>
