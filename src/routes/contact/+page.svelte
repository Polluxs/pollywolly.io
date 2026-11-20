<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from '$lib/Logo.svelte';
	import Contact from '$lib/Contact.svelte';
	import { phone } from '$lib/site';

	// `form` is only set after a submit without JavaScript; Contact shows the outcome.
	let { form } = $props();
</script>

<svelte:head>
	<title>Contact | PollyWolly</title>
	<meta
		name="description"
		content="Vertel wat er bij u vastloopt. Ik bel of mail u binnen één werkdag. Gratis, geen verplichtingen."
	/>
	<link rel="canonical" href="https://pollywolly.io/contact" />
</svelte:head>

<section class="bg-ink px-6 pt-8 pb-16 text-snow sm:pb-20">
	<div class="mx-auto max-w-6xl">
		<a
			href={resolve('/')}
			class="inline-block text-xl text-snow"
			aria-label="PollyWolly, naar de homepage"><Logo /></a
		>
		<h1 class="display mt-12 text-[clamp(2.25rem,4.4vw,3.75rem)] text-balance">
			Wat loopt er bij u <span class="text-signal">vast</span>?
		</h1>
		<p class="mt-6 max-w-2xl text-xl leading-relaxed text-snow-dim">
			Vertel het mij. Ik bel of mail u binnen één werkdag, zoals u verkiest. U spreekt mij, geen
			verkoper.
		</p>
	</div>
</section>

<section class="bg-paper-2 px-6 py-16 sm:py-20">
	<div class="mx-auto max-w-6xl">
		<Contact {phone} result={form} />
	</div>
</section>
