<script lang="ts">
	let { children } = $props();
</script>

<article class="prose">
	{@render children()}
</article>

<div class="mt-16 border-t border-border pt-8">
	<a href="/" class="text-sm text-text-muted transition-colors hover:text-text"
		>&larr; back to all posts</a
	>
</div>
