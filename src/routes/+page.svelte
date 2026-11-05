<script lang="ts">
	import Logo from '$lib/Logo.svelte';
	const bookingUrl = '#contact';
	const phone = '[telefoonnummer]';
	const placesLeft = 3;
	const nextStart = '[datum]';

	const problems = [
		{
			title: 'Wie doet wat, morgen?',
			body: 'De planning hangt aan het whiteboard en zit in het hoofd van één collega. Elke wijziging is vijf telefoontjes.',
			note: 'ZIEK!'
		},
		{
			title: 'offertevraaglijst_FINAL_v7.xlsx',
			body: 'Offertevragen, planning en opvolging in één spreadsheet. Met drie versies, en niemand weet welke de juiste is.',
			note: 'Wie heeft de laatste?'
		},
		{
			title: 'Computer says no.',
			body: 'Uw pakket plant niet zoals u werkt. Dus plant uw team het maar manueel.',
			note: 'Dan maar handmatig...'
		},
		{
			title: 'Nog een workaround erbij.',
			body: 'Data uit drie systemen, samengevoegd in Excel, mail naar de klant. Elke week opnieuw.',
			note: 'copy, paste, herhaal'
		},
		{
			title: 'Zondagavond, 22u37.',
			body: 'Iedereen is naar huis. U puzzelt nog wie morgen waar staat. Om 7u belt de eerste al ziek.',
			note: 'nog snel herplannen'
		}
	];

	const loop = [
		{
			when: 'U zegt wat knelt',
			body: 'Op de demo of gewoon tussendoor: "dit is verwarrend", "dit werkt niet zoals we dachten".'
		},
		{
			when: 'We kiezen samen',
			body: 'Wat is nu uw grootste probleem, en wat levert het meeste op? Ik help u prioriteren.'
		},
		{
			when: 'Ik bouw het',
			body: 'Binnen één à twee weken staat er een nieuwe versie.'
		},
		{
			when: 'Opgelost. Volgende.',
			body: 'Elke maand een knelpunt minder. Zo groeit de software mee met uw bedrijf.'
		}
	];

	const answers = [
		['Een andere afspraak', 'soms is het gewoon dat'],
		['Excel, maar slimmer', 'automatisering rond wat u al hebt'],
		['Een bestaand pakket', 'als dat echt past'],
		['Software op maat', 'als niets anders uw werking volgt']
	];

	const fit = [
		['Werkt zoals', 'elk bedrijf', 'u werkt'],
		['Iets werkt niet zoals verwacht', 'u past uw werking aan', 'de software wordt aangepast'],
		['Uw bedrijf groeit', 'het pakket blijft hetzelfde', 'de software groeit mee']
	];

	const outcomes = [
		'Iedereen ziet wie wat doet, vandaag en morgen, op kantoor en onderweg.',
		'Informatie wordt één keer ingevoerd. Geen overtypen, geen vijf telefoontjes meer.',
		'Uw Excel-lijsten zijn overgezet. Geen dubbele lijsten meer.'
	];

	const steps = [
		{
			when: 'Vandaag',
			title: 'Plan een gesprek',
			tag: 'gratis, 30 min',
			body: 'U vertelt wat vastloopt.'
		},
		{
			when: 'Deze week',
			title: 'Tijdscan',
			tag: 'gratis, halve dag',
			body: 'Ik kijk mee. Binnen 48 uur: een plan met prijs.'
		},
		{
			when: 'Week 1 tot 4',
			title: 'Bouwen',
			tag: '30 dagen',
			body: 'Elke vrijdag een demo. U stuurt bij.'
		},
		{ when: 'Dag 30', title: 'Het werkt', tag: '', body: 'Uw team werkt ermee.' },
		{
			when: 'Daarna',
			title: 'Volgende knelpunt',
			tag: '',
			body: 'Of u stopt. Geen abonnement.'
		}
	];

	const stack = [
		{
			name: 'Weten waar uw uren naartoe gaan',
			what: 'Tijdscan ter plaatse. Gratis, ook als u niet verder gaat.',
			basis: '1,5 dag analist',
			value: '€900'
		},
		{
			name: 'Op dag 30 werkt uw team ermee',
			what: 'Eén afgebakend proces, gebouwd en in gebruik',
			basis: '20 dagen ontwikkelaar',
			value: '€12.000'
		},
		{
			name: 'Elke vrijdag ziet u waar het staat',
			what: 'Projectleiding, testversie vanaf week 1',
			basis: '4 dagen projectleider',
			value: '€2.600'
		},
		{
			name: 'Geen gegevens kwijt',
			what: 'Excel en oude data overgezet, met proefmigratie',
			basis: '5 dagen ontwikkelaar',
			value: '€3.000'
		},
		{
			name: 'Uw team kan ermee vanaf dag 1',
			what: 'Opleiding ter plaatse voor uw team',
			basis: '1 opleidingsdag',
			value: '€1.000'
		},
		{
			name: 'Ligt het stil, dan ben ik er dezelfde werkdag mee bezig',
			what: 'Bij een storing belt u mij rechtstreeks. Andere vragen: antwoord binnen 3 werkdagen.',
			basis: '1 maand support',
			value: '€750'
		},
		{
			name: 'Het blijft draaien',
			what: 'Beheerde cloud met back-ups en monitoring. Geen websitehosting: hier draait uw bedrijf op.',
			basis: '1 maand beheerde cloud',
			value: '€450'
		},
		{
			name: 'Niet afhankelijk van mij',
			what: 'Overdrachtsdossier voor elke ontwikkelaar',
			basis: '2 dagen ontwikkelaar',
			value: '€1.200'
		}
	];

	const guarantees = [
		{
			img: 'gereedschap',
			title: 'Gratis tot het werkt.',
			body: 'U betaalt pas als de afgesproken versie werkt. Werkt ze niet op dag 30, dan werk ik gratis verder tot ze werkt. Wat ik van u vraag: één vaste contactpersoon, 2 uur per week, en feedback binnen 2 werkdagen.'
		},
		{
			img: 'sleutel',
			title: 'Uw data, uw code.',
			body: 'Uw data blijven altijd van u. Elke versie die u aanvaardt, is van u, met de code erbij. Wilt u stoppen of naar iemand anders, dan krijgt u alles mee, met documentatie.'
		},
		{
			img: 'bonnetje',
			title: 'Geen verrassingen op uw factuur.',
			body: 'Vaste prijs per maand, vooraf afgesproken. Is iets niet zoals afgesproken, dan lossen we dat eerst op. Bent u echt niet tevreden, dan is er geen factuur.'
		}
	];

	const examples = [
		{
			title: 'Planningsbord',
			body: 'Wie doet wat, deze week. Voor iedereen zichtbaar, op kantoor en onderweg.',
			replaces: 'planning.xlsx en het whiteboard'
		},
		{
			title: 'Offerte en opvolging',
			body: 'Offerte maken, versturen en opvolgen vanuit één scherm, met de klantgegevens er al in.',
			replaces: 'Word-sjabloon, mail en een opvolglijst'
		},
		{
			title: 'Klantportaal',
			body: 'Uw klanten zien zelf de status van hun bestelling of dossier.',
			replaces: 'de telefoontjes "waar blijft mijn bestelling?"'
		}
	];

	const messageChips = [
		'Onze planning zit in Excel',
		'We typen alles twee keer over',
		'Ons pakket kan niet wat wij willen',
		'Alles hangt af van één collega'
	];
	let message = $state('');

	const faq = [
		{
			q: 'Wat kost software op maat?',
			a: 'De eerste werkende versie kost €9.500, stichtende klanten betalen de eerste 3 maanden €4.750 per maand. Na de gratis scan krijgt u binnen 48 uur een prijsvork voor uw eigen project.'
		},
		{
			q: 'Hoe lang duurt het?',
			a: 'Testversie in week 1, werkende versie op dag 30. Grotere projecten bouwen we per maand verder, telkens met een werkend resultaat.'
		},
		{ q: 'Moet ik eerst betalen voor een analyse?', a: 'Nee. Het gesprek en de scan zijn gratis.' },
		{
			q: 'Waarom geen standaardpakket?',
			a: 'Soms is dat beter, en dan zeg ik het. Maatwerk loont wanneer uw manier van werken uw voorsprong is, en een pakket u dwingt om eromheen te werken.'
		},
		{
			q: 'Wat als een koppeling met ons huidige systeem niet kan?',
			a: 'Die testen we eerst. Lukt het niet, dan krijgt u de keuze voor we verder gaan. U betaalt niet voor een koppeling die niet werkt.'
		},
		{
			q: 'Kan het praten met ons boekhoudpakket?',
			a: 'Meestal wel. Heeft uw pakket een koppeling (een API), dan kan het: denk aan Exact Online, Odoo, Teamleader, Yuki of Peppol-facturatie. Die koppeling testen we eerst, voor u ervoor betaalt.'
		},
		{
			q: 'Moet ik mijn huidige pakket vervangen?',
			a: 'Nee. Vaak bouwen we net het stuk dat uw pakket niet kan, en koppelen we het eraan. Uw boekhouding blijft waar ze is.'
		},
		{
			q: 'Van wie is de code?',
			a: 'Van u, zodra u een versie aanvaardt. Uw data en accounts zijn altijd van u.'
		},
		{
			q: 'Wat als ik wil stoppen?',
			a: 'Dat kan na elk knelpunt, er is geen abonnement. U krijgt alles mee wat u aanvaard hebt, met documentatie zodat een andere ontwikkelaar kan overnemen.'
		},
		{
			q: 'Wat moet ik zelf doen?',
			a: 'Eén contactpersoon die ongeveer 2 uur per week vrijmaakt voor de demo en feedback.'
		},
		{
			q: 'Werkt u met AI?',
			a: 'Ja, als gereedschap, zoals een timmerman een elektrische zaag gebruikt. Daardoor staat er na één week al een testversie. U betaalt voor werkende software, niet voor experimenten.'
		},
		{
			q: 'Bouwt u ook apps voor in de App Store?',
			a: 'Nee. Wel webtoepassingen die werken op computer, tablet en telefoon.'
		}
	];

	const heroNotes = [
		{ text: 'wie is er morgen?', cls: 'top-6 left-10 -rotate-6' },
		{ text: 'offerte nog maken', cls: 'top-20 right-2 rotate-3' },
		{ text: 'even nabellen...', cls: 'top-40 left-0 rotate-2' },
		{ text: 'planning_v4.xlsx', cls: 'top-58 right-6 -rotate-3' },
		{ text: 'zondag 22u37', cls: 'top-78 left-8 rotate-1' }
	];

	let pastHero = $state(false);
	$effect(() => {
		const onScroll = () => (pastHero = window.scrollY > window.innerHeight * 0.8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<svelte:head>
	<title>Software op maat voor KMO's | Weer tijd voor uw zaak | PollyWolly</title>
	<meta
		name="description"
		content="Plannen, overtypen, nabellen, fouten herstellen: het eet uw dagen op. Op dag 30 neemt software op maat dat geregel over, en hebt u weer tijd voor uw zaak. Prijs vooraf, code van u."
	/>
	<link rel="canonical" href="https://pollywolly.io" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://pollywolly.io" />
	<meta
		property="og:title"
		content="Komt u als ondernemer nog toe aan het werk waarvoor u juist nodig bent?"
	/>
	<meta
		property="og:description"
		content="Software op maat voor Vlaamse KMO's. Gratis Tijdscan, werkend op dag 30, code van u."
	/>
	<meta property="og:image" content="https://pollywolly.io/og.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="nl_BE" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://pollywolly.io/og.jpg" />
</svelte:head>

<!-- Hero: the night the ad was seen -->
<section class="relative overflow-hidden bg-night text-snow">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute top-0 right-[-10rem] h-[38rem] w-[38rem] rounded-full bg-lamp opacity-[0.16] blur-[120px]"
	></div>
	<div
		class="relative mx-auto grid max-w-6xl gap-12 px-6 pt-8 pb-20 lg:grid-cols-[1fr_21rem] lg:pb-28"
	>
		<div class="lg:col-span-2">
			<nav class="flex items-center justify-between">
				<a href="/" class="text-2xl" aria-label="PollyWolly, naar boven"><Logo /></a>
				<a href="#contact" class="text-sm font-semibold text-snow-dim hover:text-snow"
					>Plan een gesprek</a
				>
			</nav>
		</div>
		<div class="pt-10 lg:pt-16">
			<p class="text-[0.8rem] font-semibold tracking-[0.2em] text-snow-dim uppercase">
				Voor ondernemers van Vlaamse KMO's · vanuit Mol
			</p>
			<h1 class="display mt-6 text-[clamp(2.25rem,4.4vw,3.75rem)] text-balance">
				Komt u als ondernemer nog toe aan het werk waarvoor u juist nodig bent?
				<span class="mt-3 block font-bold text-signal"
					>Op dag 30 hebt u de eerste uren&nbsp;terug.</span
				>
			</h1>
			<p class="mt-8 max-w-xl text-lg leading-relaxed text-snow-dim sm:text-xl">
				Plannen, overtypen, nabellen, fouten herstellen: het eet uw dagen op. Ik kom kijken waar uw
				tijd naartoe gaat en zeg eerlijk wat helpt. Soms is dat software op maat, soms een bestaand
				pakket, soms gewoon een andere afspraak. Binnen 48 uur hebt u een plan met prijs.
			</p>
			<div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
				<a href={bookingUrl} class="btn-signal text-lg"
					>Plan een gesprek <span aria-hidden="true">→</span></a
				>
				<p class="text-snow-dim">
					Of bel me gewoon: <span class="font-semibold text-snow">{phone}</span>
				</p>
			</div>
			<p class="mt-4 text-snow-dim">30 minuten. Daarna weet u of maatwerk bij u past.</p>
			<p class="mt-8 text-lg font-semibold text-snow">Het gesprek en de Tijdscan zijn gratis.</p>
			<p class="mt-3 flex items-center gap-3 text-sm text-snow-dim">
				<span class="flex gap-1.5" aria-hidden="true">
					{#each [0, 1, 2] as i}
						<span class="h-2.5 w-2.5 rounded-full {i < placesLeft ? 'bg-signal' : 'bg-night-line'}"
						></span>
					{/each}
				</span>
				Nog {placesLeft} van 3 stichtende plaatsen · Start maandag {nextStart}
			</p>
		</div>
		<div aria-hidden="true" class="relative hidden h-[24rem] self-center lg:block">
			{#each heroNotes as n, i}
				<span
					class="note-settle absolute rounded-[3px] bg-note px-4 pt-3 pb-3.5 font-hand text-[1.7rem] leading-none text-ink shadow-[0_14px_30px_-12px_rgba(0,0,0,0.7)] {n.cls}"
					style="animation-delay: {150 + i * 110}ms">{n.text}</span
				>
			{/each}
		</div>
	</div>
</section>

<!-- Problems -->
<section class="px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<h2 class="display max-w-3xl text-4xl text-balance sm:text-5xl">
			Uw bedrijf groeit. Uw <span class="marker">tijd</span> niet.
		</h2>
		<div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each problems as p}
				<article class="card relative p-7 pt-9">
					<span
						class="absolute -top-4 left-6 -rotate-2 rounded-sm bg-note px-3 py-1 font-hand text-xl leading-tight text-ink shadow-sm"
						>{p.note}</span
					>
					<h3 class="display text-2xl [overflow-wrap:anywhere]">{p.title}</h3>
					<p class="mt-3 text-[1.0625rem] leading-relaxed text-ink-dim">{p.body}</p>
				</article>
			{/each}
			<div class="relative flex items-center rounded-[1.25rem] bg-ink p-7 pr-28 text-snow sm:pr-32">
				<img
					src="/illustrations/verward.webp"
					alt=""
					width="460"
					height="900"
					loading="lazy"
					class="pointer-events-none absolute -right-5 -bottom-16 w-32 sm:w-36"
				/>
				<p class="display text-2xl leading-snug">
					Eén keer iets regelen is geen probleem. Twintig keer per week wel. Samen kost het de tijd
					waarvoor u gestart bent.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- The usual escape routes: hire someone, or buy a package -->
<section class="bg-paper-2 px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<p class="text-[0.8rem] font-semibold tracking-[0.2em] text-ink-dim uppercase">
			Wat de meeste ondernemers dan doen
		</p>
		<h2 class="display mt-4 max-w-3xl text-4xl text-balance sm:text-5xl">
			Iemand extra aanwerven. Of <span class="marker">meer tools en software</span>.
		</h2>
		<div class="mt-12 grid gap-5 md:grid-cols-2">
			<article class="card p-7 sm:p-9">
				<div class="flex items-start justify-between gap-4">
					<h3 class="display text-2xl">Iemand extra aanwerven</h3>
					<img
						src="/illustrations/aanwerven.webp"
						alt=""
						width="636"
						height="640"
						loading="lazy"
						class="-mt-2 w-20 shrink-0"
					/>
				</div>
				<p class="mt-3 text-lg leading-relaxed text-ink-dim">
					De meeste ondernemers zijn trots op hun team. Maar een extra medewerker vinden is moeilijk
					en duur, en als het niet klikt nog duurder.
				</p>
				<p class="mt-4 text-lg font-semibold">Uw mensen zijn goed. Het werk eromheen niet.</p>
				<p class="mt-2 text-ink-dim">
					Ik help ze niet te vervangen, maar tijd te geven voor het werk waarvoor u ze aannam.
				</p>
			</article>
			<article class="card p-7 sm:p-9">
				<div class="flex items-start justify-between gap-4">
					<h3 class="display text-2xl">Meer tools en software</h3>
					<img
						src="/illustrations/vorm-past-niet.webp"
						alt=""
						width="640"
						height="546"
						loading="lazy"
						class="-mt-2 w-24 shrink-0"
					/>
				</div>
				<p class="mt-3 text-lg leading-relaxed text-ink-dim">
					Nog een app, nog een pakket, nog een login. Elk werkt zoals elk bedrijf werkt, niet zoals
					u. Na een tijd hoort u: "laat maar, we werken wel zoals het is."
				</p>
				<p class="mt-4 text-lg font-semibold">Dan past u zich aan de software aan.</p>
			</article>
		</div>
		<div class="mt-16 grid items-center gap-8 md:grid-cols-[1fr_1.1fr]">
			<img
				src="/illustrations/overrompeld.webp"
				alt=""
				width="800"
				height="821"
				loading="lazy"
				class="mx-auto w-full max-w-sm"
			/>
			<p class="display text-3xl leading-snug text-balance sm:text-4xl">
				De betere vraag: waar gaat <span class="marker">uw tijd</span> nu eigenlijk naartoe?
			</p>
		</div>
	</div>
</section>

<!-- Why look first: find the right wheel in the machine -->
<section class="px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<p class="text-[0.8rem] font-semibold tracking-[0.2em] text-ink-dim uppercase">
			Waarom eerst kijken
		</p>
		<h2 class="display mt-4 max-w-3xl text-4xl text-balance sm:text-5xl">
			Een klein deel van het werk kost <span class="marker">het grootste deel</span> van uw tijd.
		</h2>

		<div class="mt-14 grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
			<img
				src="/illustrations/wielen-zoeken.webp"
				alt=""
				width="1000"
				height="679"
				loading="lazy"
				class="mx-auto w-full max-w-xl"
			/>
			<div>
				<p class="text-sm font-semibold tracking-wide text-ink-dim uppercase">Nu</p>
				<h3 class="display mt-1 text-3xl">Veel wielen. Welk doet ertoe?</h3>
				<p class="mt-3 text-lg leading-relaxed text-ink-dim">
					Uw zaak is een machine vol wielen: mensen, afspraken, lijsten, pakketten. U draait aan
					alles tegelijk en komt nauwelijks vooruit. Wie dan meteen tools koopt, zet er nog meer
					wielen bij, ook waar het probleem nooit zat. De echte kost merkt u vaak pas als u al
					vastzit.
				</p>
			</div>
		</div>

		<div class="card mt-16 p-7 sm:p-9">
			<h3 class="display text-2xl">Het juiste wiel is niet altijd software</h3>
			<ul class="mt-5 grid gap-x-8 sm:grid-cols-2">
				{#each answers as a}
					<li class="flex items-baseline gap-3 border-b border-line py-3">
						<span class="font-semibold">{a[0]}</span>
						<span class="text-ink-dim">{a[1]}</span>
					</li>
				{/each}
			</ul>
			<p class="mt-5 text-ink-dim">
				Voor uw offertelijst of uw manier van werken bestaat er vaak gewoon geen pakket. Dan bouwen
				we wat ontbreekt, niet meer.
			</p>
		</div>

		<div class="mt-16 grid items-center gap-10 md:grid-cols-[1fr_1.3fr]">
			<div class="md:order-1">
				<p class="text-sm font-semibold tracking-wide text-resolved uppercase">Straks</p>
				<h3 class="display mt-1 text-3xl">Het juiste wiel, en alles versnelt.</h3>
				<p class="mt-3 text-lg leading-relaxed text-ink-dim">
					Elke draai die u maakt, brengt uw zaak verder. Om dat wiel te vinden, moet ik weten waar u
					staat, waar u naartoe wilt en wat uw budget is.
				</p>
				<p class="display mt-6 text-2xl leading-snug">
					Groeit u, dan groeien we <span class="marker">samen verder</span>.
				</p>
			</div>
			<img
				src="/illustrations/wielen-gevonden.webp"
				alt=""
				width="1000"
				height="674"
				loading="lazy"
				class="mx-auto w-full max-w-xl md:order-2"
			/>
		</div>
	</div>
</section>

<!-- Timeline -->
<section class="bg-paper-2 px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<p class="text-[0.8rem] font-semibold tracking-[0.2em] text-ink-dim uppercase">
			Maar maatwerk duurt toch maanden?
		</p>
		<h2 class="display mt-4 max-w-3xl text-4xl text-balance sm:text-5xl">
			Hier niet. Op dag 30 lost een eerste versie <span class="marker">één probleem</span> op.
		</h2>
		<ol
			class="relative mt-16 grid gap-10 md:mt-28 md:grid-cols-5 md:grid-rows-[auto_auto_auto_1fr] md:gap-x-6 md:gap-y-0"
		>
			<span
				aria-hidden="true"
				class="absolute top-[0.4rem] right-0 left-0 hidden h-0.5 bg-line md:block"
			></span>
			<span aria-hidden="true" class="absolute top-0 bottom-0 left-[0.4rem] w-0.5 bg-line md:hidden"
			></span>
			{#each steps as s}
				{@const key = s.when === 'Dag 30'}
				<li class="relative pl-9 md:row-span-4 md:grid md:grid-rows-subgrid md:pt-10 md:pl-0">
					<span
						aria-hidden="true"
						class="absolute top-0 left-0 rounded-full {key
							? 'h-5 w-5 -translate-x-[0.2rem] -translate-y-[0.2rem] bg-signal ring-4 ring-ink md:hidden'
							: 'h-[0.95rem] w-[0.95rem] border-[3px] border-ink bg-paper'}"
					></span>
					{#if key}
						<img
							src="/illustrations/kalender.webp"
							alt=""
							width="320"
							height="320"
							loading="lazy"
							class="absolute -top-[4.6rem] -left-4 hidden w-20 md:block"
						/>
					{/if}
					<p class="text-sm font-semibold tracking-wide text-ink-dim uppercase">{s.when}</p>
					<h3 class="display mt-2 text-2xl">
						{#if key}<span class="marker">{s.title}</span>{:else}{s.title}{/if}
					</h3>
					<p class="mt-1 text-sm font-semibold text-resolved">{s.tag}</p>
					<p class="mt-3 text-base leading-relaxed text-ink-dim">{s.body}</p>
				</li>
			{/each}
		</ol>

		<h3 class="display mt-20 text-3xl">Wat past er in 30 dagen? Bijvoorbeeld:</h3>
		<div class="mt-8 grid gap-5 md:grid-cols-3">
			{#each examples as ex}
				<article class="card flex flex-col p-7">
					<p class="text-sm font-semibold tracking-wide text-resolved uppercase">1 maand</p>
					<h4 class="display mt-2 text-2xl">{ex.title}</h4>
					<p class="mt-3 leading-relaxed text-ink-dim">{ex.body}</p>
					<p class="mt-auto pt-5 text-sm text-ink-dim">
						Vervangt: <span class="font-semibold text-ink">{ex.replaces}</span>
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Outcome -->
<section class="px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<p class="text-[0.8rem] font-semibold tracking-[0.2em] text-ink-dim uppercase">Op dag 30</p>
		<h2 class="display mt-4 max-w-3xl text-4xl text-balance sm:text-5xl">
			Wat nu via u loopt, loopt <span class="marker">zonder u</span>.
		</h2>
		<div class="mt-12 grid gap-12 lg:grid-cols-2">
			<div>
				<p class="text-lg leading-relaxed text-ink-dim">
					Wat anderen merken: klanten krijgen sneller antwoord, collega's vragen minder "hoe zat dat
					ook alweer?", en u kunt op verlof zonder dat het bedrijf mee op verlof gaat.
				</p>
				<p class="mt-6 border-l-4 border-resolved pl-4 text-lg font-semibold">
					Ik beloof geen percentages. Ik beloof een datum en software die werkt.
				</p>
			</div>
			<div class="lg:-mt-40">
				<img
					src="/illustrations/opgelucht.webp"
					alt=""
					width="900"
					height="600"
					loading="lazy"
					class="ml-auto block w-52 sm:w-60"
				/>
				<ul class="divide-y divide-line border-y border-line">
					{#each outcomes as o}
						<li class="flex gap-4 py-5 text-lg leading-snug">
							<span
								class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-resolved text-sm text-white"
								aria-hidden="true">✓</span
							>
							<span>{o}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Steering: the team shapes it, so the team uses it -->
<section class="bg-paper-2 px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<p class="text-[0.8rem] font-semibold tracking-[0.2em] text-ink-dim uppercase">Na dag 30</p>
		<h2 class="display mt-4 max-w-3xl text-4xl text-balance sm:text-5xl">
			Uw bedrijf blijft veranderen. <span class="marker">De software ook.</span>
		</h2>
		<p class="mt-6 max-w-2xl text-xl leading-relaxed text-ink-dim">
			Elke maand uw grootste probleem minder.
		</p>
		<div class="mt-14 grid gap-12 lg:grid-cols-2">
			<div>
				<!-- The loop: "next month?" runs back into step 1, or you pause or stop -->
				<ol class="relative space-y-7 pl-8">
					<span
						aria-hidden="true"
						class="absolute top-5 bottom-5 left-0 mb-0 w-8 rounded-l-2xl border-y-2 border-l-2 border-ink-dim"
					></span>
					<span
						aria-hidden="true"
						class="absolute top-5 left-6 mb-0 -translate-y-1/2 border-y-[7px] border-l-[9px] border-y-transparent border-l-ink-dim"
					></span>
					{#each loop as step, i}
						<li class="flex gap-5">
							<span
								class="display relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal text-lg"
								>{i + 1}</span
							>
							<div>
								<h3 class="display text-2xl">{step.when}</h3>
								<p class="mt-1 leading-relaxed text-ink-dim">{step.body}</p>
							</div>
						</li>
					{/each}
					<li class="flex h-10 w-fit items-center gap-3 rounded-xl bg-paper pr-1.5 pl-4">
						<span class="font-semibold text-ink-dim">En volgende maand opnieuw?</span>
						<span class="flex gap-1">
							<span
								title="Ja, het volgende knelpunt"
								class="flex h-7 w-7 items-center justify-center rounded-full bg-signal text-ink"
							>
								<svg
									aria-hidden="true"
									viewBox="0 0 24 24"
									class="h-3.5 w-3.5 fill-none stroke-current stroke-[2.5]"
									><path d="M21 12a9 9 0 1 1-2.64-6.36L21 8" /><path d="M21 3v5h-5" /></svg
								>
								<span class="sr-only">Ja, het volgende knelpunt</span>
							</span>
							<span
								title="Even pauzeren"
								class="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-paper-2 text-ink-dim"
							>
								<svg aria-hidden="true" viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-current"
									><rect x="6" y="5" width="4" height="14" rx="1" /><rect
										x="14"
										y="5"
										width="4"
										height="14"
										rx="1"
									/></svg
								>
								<span class="sr-only">Even pauzeren</span>
							</span>
							<span
								title="Stoppen, u krijgt alles mee"
								class="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-paper-2 text-ink-dim"
							>
								<svg aria-hidden="true" viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-current"
									><rect x="6" y="6" width="12" height="12" rx="1.5" /></svg
								>
								<span class="sr-only">Stoppen, u krijgt alles mee</span>
							</span>
						</span>
					</li>
				</ol>
			</div>
			<div class="card self-start p-7">
				<table class="w-full text-left text-[0.95rem]">
					<thead>
						<tr class="border-b border-line text-sm text-ink-dim">
							<th class="w-1/3 py-2 pr-4 font-semibold"></th>
							<th class="py-2 pr-4 align-bottom font-semibold">
								<img
									src="/illustrations/vorm-past-niet.webp"
									alt=""
									width="640"
									height="546"
									loading="lazy"
									class="mb-2 w-24"
								/>
								Een pakket
							</th>
							<th class="py-2 align-bottom font-semibold text-ink">
								<img
									src="/illustrations/vorm-past-wel.webp"
									alt=""
									width="640"
									height="546"
									loading="lazy"
									class="mb-2 w-24"
								/>
								PollyWolly
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-line">
						{#each fit as row}
							<tr>
								<td class="py-3 pr-4 font-semibold">{row[0]}</td>
								<td class="py-3 pr-4 text-ink-dim">{row[1]}</td>
								<td class="py-3 font-semibold">{row[2]}</td>
							</tr>
						{/each}
					</tbody>
				</table>
				<p class="mt-5 text-sm text-ink-dim">
					Eerlijk is eerlijk: een pakket is sneller gestart. Volstaat dat voor u, dan zeg ik het.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Stack and price, read like a receipt -->
<section class="px-6 py-24">
	<div class="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr_1fr]">
		<div>
			<p class="text-[0.8rem] font-semibold tracking-[0.2em] text-ink-dim uppercase">
				Wat kost dat?
			</p>
			<h2 class="display mt-4 text-4xl text-balance sm:text-5xl">
				Wat u krijgt voor <span class="marker">€9.500</span>.
			</h2>
			<dl class="mt-10 divide-y divide-line border-y border-line">
				{#each stack as item}
					<div class="flex items-baseline justify-between gap-6 py-4">
						<dt>
							<span class="font-semibold">{item.name}</span>
							<span class="mt-0.5 block text-[0.95rem] text-ink-dim">{item.what}</span>
						</dt>
						<dd class="shrink-0 text-right font-mono text-ink-dim">
							{item.value}
							<span class="mt-0.5 block text-xs whitespace-nowrap">{item.basis}</span>
						</dd>
					</div>
				{/each}
				<div class="flex items-baseline justify-between py-4">
					<dt class="font-semibold">Totale waarde</dt>
					<dd class="font-mono text-ink-dim line-through">€21.900</dd>
				</div>
				<div class="flex items-baseline justify-between py-4">
					<dt class="display text-2xl">Uw prijs</dt>
					<dd class="display text-3xl">€9.500</dd>
				</div>
			</dl>
			<ul class="mt-4 space-y-0.5 text-[0.8rem] leading-snug text-ink-dim">
				<li><strong class="text-ink">Niets vooraf:</strong> u betaalt pas wanneer het werkt.</li>
				<li>
					<strong class="text-ink">Geen abonnement:</strong> na dag 30 kiest u per knelpunt of we verder
					gaan (€9.500/maand).
				</li>
				<li>
					<strong class="text-ink">Stopt de ontwikkeling,</strong> dan blijft alleen de beheerde cloud
					(€450/maand). Sneller hulp nodig dan mijn agenda toelaat? Dan spreken we een SLA af, op maat
					van uw noden.
				</li>
				<li>
					Gerekend aan Belgische marktprijzen: ontwikkelaar en analist €600/dag, projectleider
					€650/dag, opleidingsdag €1.000, support €750/maand, beheerde cloud €450/maand. Prijzen
					excl. btw.
				</li>
			</ul>
		</div>
		<aside
			class="self-start rounded-[1.25rem] border-2 border-ink bg-paper-2 p-8 lg:sticky lg:top-8 lg:mt-24"
		>
			<p class="text-[0.8rem] font-semibold tracking-[0.2em] text-ink-dim uppercase">
				PollyWolly is nieuw
			</p>
			<p class="display mt-2 text-3xl leading-tight">Daarom zoek ik 3 stichtende klanten.</p>
			<p class="mt-6 text-lg leading-relaxed">
				U betaalt <span class="display marker text-4xl">€4.750</span> per maand, de eerste 3 maanden.
				In ruil publiceer ik uw project als case, met cijfers, en schrijft u een eerlijke review.
			</p>
			<p class="mt-6 flex items-center gap-3 font-semibold">
				<span class="flex gap-1.5" aria-hidden="true">
					{#each [0, 1, 2] as i}
						<span class="h-3 w-3 rounded-full border-2 border-ink {i < placesLeft ? 'bg-ink' : ''}"
						></span>
					{/each}
				</span>
				Nog {placesLeft} van 3 plaatsen
			</p>
			<p class="mt-2 text-sm text-ink-dim">
				Klant 4 tot 6 betaalt de eerste 3 maanden €7.125, vanaf klant 7 de volle prijs.
			</p>
			<a href={bookingUrl} class="btn-signal mt-8"
				>Plan een gesprek <span aria-hidden="true" class="ml-2">→</span></a
			>
		</aside>
	</div>
</section>

<!-- Guarantees -->
<section class="bg-paper-2 px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<p class="text-[0.8rem] font-semibold tracking-[0.2em] text-ink-dim uppercase">
			En als het niet werkt?
		</p>
		<h2 class="display mt-4 max-w-3xl text-4xl text-balance sm:text-5xl">
			Dan is dat <span class="marker">mijn probleem</span>, niet het uwe.
		</h2>
		<div class="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-[auto_auto_1fr]">
			{#each guarantees as g}
				<article class="card p-7 md:row-span-3 md:grid md:grid-rows-subgrid md:gap-0">
					<img
						src="/illustrations/{g.img}.webp"
						alt=""
						width="320"
						height="320"
						loading="lazy"
						class="-mt-2 -ml-2 w-24"
					/>
					<h3 class="display mt-3 text-2xl leading-tight">{g.title}</h3>
					<p class="mt-4 leading-relaxed text-ink-dim">{g.body}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Proof: back to night, the live demo -->
<section class="bg-night px-6 py-24 text-snow">
	<div class="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
		<div>
			<p class="text-[0.8rem] font-semibold tracking-[0.2em] text-snow-dim uppercase">
				Maar u kent mij nog niet
			</p>
			<h2 class="display mt-4 text-4xl text-balance sm:text-5xl">
				Zo ziet software van <span class="text-signal">PollyWolly</span> eruit.
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-snow-dim">
				Uw software zal er anders uitzien, maar ze wordt even degelijk gebouwd. Neem <strong
					class="text-snow">Databakkes.be</strong
				>: gratis gegevens over elke onderneming in België, gebouwd en beheerd door mij.
			</p>
			<a href="https://databakkes.be" class="btn-signal mt-8"
				>Bekijk databakkes.be <span aria-hidden="true">↗</span></a
			>
			<p class="mt-4 text-snow-dim">Zoek gerust uw eigen bedrijf op.</p>
		</div>
		<div class="overflow-hidden rounded-2xl border border-night-line bg-night-2">
			<div class="flex items-center gap-2 border-b border-night-line px-4 py-3">
				<span class="h-3 w-3 rounded-full bg-night-line"></span>
				<span class="h-3 w-3 rounded-full bg-night-line"></span>
				<span class="h-3 w-3 rounded-full bg-night-line"></span>
				<span class="ml-3 font-mono text-sm text-snow-dim">databakkes.be</span>
			</div>
			<div class="grid grid-cols-2 gap-px bg-night-line">
				<div class="bg-night-2 p-6">
					<p class="display text-4xl">1,19 mln</p>
					<p class="mt-1 text-sm text-snow-dim">actieve ondernemingen</p>
				</div>
				<div class="bg-night-2 p-6">
					<p class="display text-4xl">1,9 mln</p>
					<p class="mt-1 text-sm text-snow-dim">pagina's, in 3 talen</p>
				</div>
				<div class="col-span-2 bg-night-2 p-6">
					<p class="font-semibold text-snow">Elke dag bijgewerkt</p>
					<p class="mt-1 text-snow-dim">
						Een bedrijf dat gisteren werd opgericht, staat er vandaag al in.
					</p>
				</div>
				<div class="col-span-2 bg-night-2 p-6">
					<p class="display text-4xl text-signal">
						500.000+ <span class="text-2xl text-snow">opvragingen per week</span>
					</p>
					<p class="mt-2 text-snow-dim">
						Vooral bots en AI. Databakkes draait er dag en nacht onder door.
					</p>
				</div>
				<div class="col-span-2 bg-night-2 p-6">
					<p class="font-semibold text-snow">Gekoppeld aan AI-assistenten</p>
					<p class="mt-1 text-snow-dim">
						Bruikbaar als databron: een assistent kan er rechtstreeks bedrijfsgegevens opvragen.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- About -->
<section class="bg-paper-2 px-6 py-24">
	<div class="mx-auto max-w-3xl">
		<h2 class="display text-4xl text-balance sm:text-5xl">
			U praat met <span class="marker">wie het oplost</span>.
		</h2>
		<p class="mt-6 text-xl leading-relaxed text-ink-dim">
			Ik ben Thomas Dorissen, vanuit Mol. Ik help bedrijven hun werking vlotter te laten lopen,
			zodat ze kunnen groeien. Vaak gebeurt dat met software, maar het begint altijd bij hoe u
			werkt.
		</p>
		<p class="mt-4 text-xl leading-relaxed text-ink-dim">
			Ik heb een technische achtergrond en ik bouw graag zelf. Die passie om dingen te laten werken
			brengt me telkens weer bij bedrijven: kijken waar het vastloopt, en het oplossen.
		</p>
		<p class="mt-4 text-xl leading-relaxed text-ink-dim">
			Geen verkoper of projectmanager tussen ons in. U spreekt mij, en ik doe het werk zelf. Waar
			nodig werk ik samen met vaste partners: twee IT-bedrijven, en een advocatenkantoor
			gespecialiseerd in IT-recht en GDPR.
		</p>
		<p class="mt-4 text-xl font-semibold">Daarom neem ik maximaal 2 nieuwe projecten per maand.</p>
	</div>
</section>

<!-- FAQ -->
<section class="px-6 py-24">
	<div class="mx-auto max-w-3xl">
		<h2 class="display text-4xl text-balance sm:text-5xl">Wat mensen mij eerst vragen</h2>
		<div class="mt-10 divide-y divide-line border-y border-line">
			{#each faq as f}
				<details class="group py-5">
					<summary
						class="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold"
					>
						{f.q}
						<span
							class="text-2xl font-normal text-ink-dim transition-transform group-open:rotate-45"
							aria-hidden="true">+</span
						>
					</summary>
					<p class="mt-3 max-w-2xl leading-relaxed text-ink-dim">{f.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<!-- Contact -->
<section id="contact" class="bg-paper-2 px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<h2 class="display text-4xl text-balance sm:text-5xl">
			Klaar om weer tijd te maken voor <span class="marker">uw zaak</span>?
		</h2>
		<p class="mt-6 max-w-2xl text-xl leading-relaxed text-ink-dim">
			Dit is mijn eigen agenda. Kies een moment dat u past, en u spreekt mij. Geen verkoper, geen
			verplichtingen.
		</p>
		<div class="mt-12 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
			<div class="flex flex-col rounded-[1.25rem] bg-ink p-8 text-snow sm:p-10">
				<p class="text-[0.8rem] font-semibold tracking-[0.2em] text-signal uppercase">
					Mijn eigen agenda
				</p>
				<h3 class="display mt-3 text-3xl sm:text-4xl">Plan een gesprek van 30 minuten</h3>
				<p class="mt-3 text-lg text-snow-dim">Via Google Meet of telefoon. U kiest het moment.</p>
				<a href={bookingUrl} class="btn-signal mt-8 self-start text-lg"
					>Plan een gesprek <span aria-hidden="true">→</span></a
				>
				<div class="mt-10 border-t border-night-line pt-8">
					<p class="text-snow-dim">
						Liever meteen bellen? Ik neem op als ik kan, anders bel ik terug.
					</p>
					<a
						href="tel:{phone}"
						class="display mt-2 inline-block text-2xl text-snow hover:text-signal">{phone}</a
					>
				</div>
			</div>
			<form class="card p-8 sm:p-10" onsubmit={(e) => e.preventDefault()}>
				<div class="flex items-start justify-between gap-4">
					<h3 class="display text-3xl">Of ik bel u</h3>
					<img
						src="/illustrations/koffie.webp"
						alt=""
						width="320"
						height="320"
						loading="lazy"
						class="-mt-3 -mr-2 w-24 shrink-0 sm:w-28"
					/>
				</div>
				<p class="mt-2 text-ink-dim">Laat uw gegevens achter, ik bel binnen één werkdag.</p>
				<div class="mt-6 grid gap-4 sm:grid-cols-2">
					<label class="block text-sm font-semibold" for="naam"
						>Naam
						<input
							id="naam"
							type="text"
							class="mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-3 text-base font-normal"
						/>
					</label>
					<label class="block text-sm font-semibold" for="tel"
						>Telefoon
						<input
							id="tel"
							type="tel"
							class="mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-3 text-base font-normal"
						/>
					</label>
					<label class="block text-sm font-semibold sm:col-span-2" for="wanneer"
						>Wanneer best bereikbaar?
						<input
							id="wanneer"
							type="text"
							placeholder="bv. voormiddag, na 17u"
							class="mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-3 text-base font-normal"
						/>
					</label>
					<label class="block text-sm font-semibold sm:col-span-2" for="vast"
						>Wat loopt er vast? <span class="font-normal text-ink-dim">(optioneel)</span>
						<span class="mt-2 flex flex-wrap gap-2">
							{#each messageChips as chip}
								<button
									type="button"
									class="rounded-full border border-line bg-paper px-3 py-1.5 text-sm font-normal hover:border-ink"
									onclick={() => (message = chip)}>{chip}</button
								>
							{/each}
						</span>
						<textarea
							id="vast"
							bind:value={message}
							rows="3"
							class="mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-3 text-base font-normal"
						></textarea>
					</label>
				</div>
				<button class="btn-signal mt-6 w-full justify-center sm:w-auto">Bel mij terug</button>
			</form>
		</div>
		<p class="mt-8 text-sm text-ink-dim">
			Volgende start: maandag {nextStart}. Nog {placesLeft} van 3 stichtende plaatsen.
		</p>
	</div>
</section>

<!-- Mobile: keep the next step in reach after the hero -->
<div
	class="fixed inset-x-0 bottom-0 z-20 flex gap-3 border-t border-night-line bg-night/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden {pastHero
		? 'translate-y-0'
		: 'translate-y-full'}"
>
	<a href={bookingUrl} class="btn-signal flex-1 justify-center py-3">Plan een gesprek</a>
	<a
		href="tel:{phone}"
		class="flex items-center rounded-full border border-night-line px-5 font-semibold text-snow"
		>Bel</a
	>
</div>
