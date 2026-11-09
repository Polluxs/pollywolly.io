<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import Logo from '$lib/Logo.svelte';

	const notFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{notFound ? 'Pagina niet gevonden' : 'Er liep iets mis'} | PollyWolly</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="min-h-[80vh] bg-paper px-6 pt-8 pb-20">
	<div class="mx-auto max-w-6xl">
		<a
			href={resolve('/')}
			class="inline-block text-xl text-ink"
			aria-label="PollyWolly, naar de homepage"><Logo /></a
		>

		<div class="mt-16 grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
			<div>
				<p class="font-mono text-sm text-ink-dim">Fout {page.status}</p>
				{#if notFound}
					<h1 class="display mt-4 text-5xl text-balance sm:text-6xl">
						Deze pagina is <span class="marker">op verlof</span>.
					</h1>
					<p class="mt-6 max-w-xl text-xl leading-relaxed text-ink-dim">
						En ze heeft niemand gezegd waar ze de sleutels heeft gelegd. Geen paniek: de rest van de
						zaak draait gewoon door.
					</p>
				{:else}
					<h1 class="display mt-4 text-5xl text-balance sm:text-6xl">
						Hier liep <span class="marker">iets mis</span>.
					</h1>
					<p class="mt-6 max-w-xl text-xl leading-relaxed text-ink-dim">
						Niet uw fout. Probeer het zo meteen opnieuw, of ga terug naar de homepage.
					</p>
				{/if}
				<div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
					<a href={resolve('/')} class="btn-signal text-lg"
						>Naar de homepage <span aria-hidden="true">→</span></a
					>
					<a href={resolve('/gesprek')} class="font-semibold text-ink hover:underline"
						>Of plan meteen een gesprek</a
					>
				</div>
			</div>

			<div class="relative mx-auto w-48 sm:w-60" aria-hidden="true">
				<img src="/illustrations/verward.webp" alt="" width="460" height="900" class="w-full" />
				<p
					class="absolute -top-4 -right-10 w-32 rotate-6 bg-signal px-3 py-4 text-center leading-tight text-ink shadow-lg"
					style="font-family: 'Caveat', cursive; font-size: 1.5rem; font-weight: 700"
				>
					{notFound ? 'Wie heeft die pagina gezien?' : 'Even herstarten?'}
				</p>
			</div>
		</div>
	</div>
</section>
