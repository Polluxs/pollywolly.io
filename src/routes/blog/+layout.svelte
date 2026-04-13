<script lang="ts">
	let { children } = $props();
</script>

<article class="prose">
	{@render children()}
</article>

<div class="mt-16 pt-8 border-t border-border">
	<a href="/" class="text-sm text-text-muted hover:text-text transition-colors">&larr; back to all posts</a>
</div>
