<script lang="ts">
	let { children } = $props();
</script>

<div class="mx-auto max-w-[720px] px-6 pt-20 pb-16">
	<article class="prose">
		{@render children()}
	</article>

	<div class="mt-16 border-t border-line pt-8">
		<a href="/" class="text-sm text-ink-dim hover:text-ink">&larr; back to all posts</a>
	</div>
</div>
