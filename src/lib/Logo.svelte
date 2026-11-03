<script lang="ts">
	let { class: className = '' } = $props();
</script>

<span class="inline-flex items-center gap-2.5 {className}">
	<svg class="h-[1.4em] w-[1.4em] shrink-0" viewBox="0 0 64 64" aria-hidden="true">
		<g transform="rotate(-6 32 32)">
			<path d="M10 9h44v33l-11 11H10z" fill="#ffe14d" />
			<path d="M54 42H43v11z" fill="#d9b92e" />
			<text
				x="30"
				y="43"
				font-family="'Bricolage Grotesque', sans-serif"
				font-size="34"
				font-weight="800"
				fill="#0e1117"
				text-anchor="middle">P</text
			>
		</g>
	</svg>
	<span class="display logo">PollyWolly</span>
</span>
