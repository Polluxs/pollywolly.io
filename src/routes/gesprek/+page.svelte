<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import Logo from '$lib/Logo.svelte';
	import Contact from '$lib/Contact.svelte';
	import { bookingUrl, phone, nextStart } from '$lib/site';

	// Landing page for the ads. The headline repeats the ad the visitor clicked,
	// picked by utm_content (the ad's slug). Unknown or missing slugs fall back to the default.
	type Headline = { head: string; mark: string; tail?: string };

	const fallback: Headline = {
		head: 'Klaar om weer tijd te maken voor',
		mark: 'uw zaak',
		tail: '?'
	};

	const headlines: Record<string, Headline> = {
		tijd: { head: 'Komt u nog toe aan', mark: 'uw eigen werk', tail: '?' },
		'alles-draait': { head: 'Alles draait.', mark: 'Behalve wat u eigenlijk wilde aanpakken.' },
		zoektocht: { head: 'Klant belt:', mark: 'waar blijft mijn bestelling', tail: '?' },
		workaround: { head: 'Nog een', mark: 'workaround', tail: ' erbij?' },
		verlof: { head: 'Kan uw beste kracht', mark: '2 weken op verlof', tail: '?' },
		brandjes: { head: 'U blust elke dag', mark: 'brandjes', tail: '?' },
		'na-de-drukte': { head: 'Dat pakken we aan', mark: 'na de drukte', tail: '.' },
		excel: { head: 'U zoekt iemand', mark: 'om Excel bij te houden', tail: '?' },
		'voor-na': { head: 'Uw bedrijf', mark: 'vandaag', tail: '.' },
		stekker: { head: "Vijf programma's.", mark: 'Eén bestelling.' },
		waterloo: { head: 'AI weet alles', mark: 'over Waterloo', tail: '.' },
		'ai-specialist': { head: 'U zoekt een', mark: 'AI-specialist', tail: '?' }
	};

	let headline = $state(fallback);

	onMount(() => {
		const slug = new URLSearchParams(window.location.search).get('utm_content') ?? '';
		headline = headlines[slug] ?? fallback;
	});

	const steps = [
		['30 minuten, gratis', 'Via Google Meet of telefoon, op een moment dat u past.'],
		['U vertelt wat vastloopt', 'Ik stel vragen en luister. Geen verkoper, geen verplichtingen.'],
		[
			'Daarna weet u waar u staat',
			'Of software op maat bij u past. Zo ja, krijgt u een plan met prijs.'
		]
	];

	const facts = [
		['Eerste versie op dag 30', 'Elke vrijdag een demo. U stuurt bij.'],
		['Code en data van u', 'U kunt altijd wisselen of zelf verder.'],
		[
			'Soms is het antwoord kleiner',
			'Eén automatisering of een bestaand pakket. Wat het kost, hoort u in het gesprek.'
		]
	];
</script>

<svelte:head>
	<title>Plan een gesprek | PollyWolly</title>
	<meta
		name="description"
		content="Een gratis gesprek van 30 minuten over wat er bij u vastloopt. Daarna weet u of software op maat bij u past."
	/>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="bg-night px-6 pt-8 pb-14 text-snow sm:pb-16">
	<div class="mx-auto max-w-6xl">
		<a
			href={resolve('/')}
			class="inline-block text-xl text-snow"
			aria-label="PollyWolly, naar de homepage"><Logo /></a
		>
		<div class="mt-12 grid items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
			<div>
				<h1 class="display text-[clamp(2.25rem,4.4vw,3.75rem)] text-balance">
					{headline.head} <span class="text-signal">{headline.mark}</span>{headline.tail ?? ''}
				</h1>
				<p class="mt-6 max-w-xl text-xl leading-relaxed text-snow-dim">
					Daar gaat het gesprek over. Kies een moment, of laat uw nummer achter.
				</p>
				<a href="#contact" class="btn-signal mt-8 text-lg"
					>Kies een moment <span aria-hidden="true">↓</span></a
				>
			</div>
			<ol class="grid gap-5 rounded-[1.25rem] border border-night-line p-7">
				{#each steps as [title, body], i (title)}
					<li class="flex gap-4">
						<p class="font-mono text-sm leading-7 text-signal">0{i + 1}</p>
						<div>
							<h2 class="display text-lg">{title}</h2>
							<p class="mt-1 text-snow-dim">{body}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<section id="contact" class="bg-paper-2 px-6 py-16 sm:py-20">
	<div class="mx-auto max-w-6xl">
		<Contact {bookingUrl} {phone} />
		<p class="mt-8 text-sm text-ink-dim">
			Volgende start: maandag {nextStart}. Maximaal 2 nieuwe projecten per maand.
		</p>
	</div>
</section>

<section class="px-6 py-16">
	<div class="mx-auto max-w-6xl">
		<dl class="grid gap-8 sm:grid-cols-3">
			{#each facts as [title, body] (title)}
				<div>
					<dt class="display text-xl">{title}</dt>
					<dd class="mt-2 text-ink-dim">{body}</dd>
				</div>
			{/each}
		</dl>
		<a href={resolve('/')} class="mt-12 inline-block font-semibold text-ink hover:underline"
			>Eerst meer lezen over hoe ik werk <span aria-hidden="true">→</span></a
		>
	</div>
</section>
