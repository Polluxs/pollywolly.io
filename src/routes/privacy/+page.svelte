<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from '$lib/Logo.svelte';

	const email = 'privacy@pollywolly.io';
	// Update when the content changes.
	const version = '21 november 2026';
</script>

<svelte:head>
	<title>Privacyverklaring | PollyWolly</title>
	<meta
		name="description"
		content="Welke persoonsgegevens PollyWolly BV verwerkt via pollywolly.io, voor welke doeleinden, hoe lang ze bewaard worden en welke rechten u hebt."
	/>
	<link rel="canonical" href="https://pollywolly.io/privacy" />
</svelte:head>

<section class="bg-ink px-6 pt-8 pb-16 text-snow sm:pb-20">
	<div class="mx-auto max-w-6xl">
		<a
			href={resolve('/')}
			class="inline-block text-xl text-snow"
			aria-label="PollyWolly, naar de homepage"><Logo /></a
		>
		<h1 class="display mt-12 text-[clamp(2.25rem,4.4vw,3.75rem)] text-balance">
			Privacyverklaring
		</h1>
		<p class="mt-6 text-lg text-snow-dim">Versie van {version}</p>
	</div>
</section>

<section class="bg-paper-2 px-6 py-16 sm:py-20">
	<article class="prose-privacy mx-auto max-w-2xl text-[1.0625rem] leading-relaxed text-ink-dim">
		<p>
			Deze privacyverklaring beschrijft welke persoonsgegevens PollyWolly BV verwerkt in het kader
			van de website pollywolly.io, voor welke doeleinden en op welke rechtsgrond deze verwerking
			gebeurt, hoe lang de gegevens worden bewaard en over welke rechten u als betrokkene beschikt,
			overeenkomstig de Algemene Verordening Gegevensbescherming (Verordening (EU) 2016/679, hierna
			"AVG").
		</p>

		<h2>1. Verwerkingsverantwoordelijke</h2>
		<p>
			PollyWolly BV, met ondernemingsnummer 0797.231.914 en zetel te Wanmolenstraat 12, 2400 Mol, is
			de verwerkingsverantwoordelijke (hierna "de Verwerkingsverantwoordelijke"). Vragen over de
			verwerking van persoonsgegevens kunnen worden gericht aan
			<a href="mailto:{email}">{email}</a>.
		</p>

		<h2>2. Contactformulier</h2>

		<h3>2.1 Verwerkte gegevens</h3>
		<p>Bij het gebruik van het contactformulier worden de volgende gegevens verwerkt:</p>
		<ul>
			<li>naam;</li>
			<li>
				naargelang de gekozen wijze van contact: telefoonnummer en gewenst tijdstip van contact, dan
				wel e-mailadres;
			</li>
			<li>de omschrijving die de betrokkene desgevallend opgeeft;</li>
			<li>de pagina van waarop het formulier werd verzonden.</li>
		</ul>

		<h3>2.2 Doel en rechtsgrond</h3>
		<p>
			Deze gegevens worden uitsluitend verwerkt met het oog op het beantwoorden van de aanvraag. De
			verwerking steunt op de noodzaak om op verzoek van de betrokkene maatregelen te nemen
			voorafgaand aan het sluiten van een overeenkomst (artikel 6.1.b AVG). De gegevens worden niet
			gebruikt voor direct marketing en worden niet aan derden verkocht.
		</p>

		<h3>2.3 Opslag</h3>
		<p>
			Een aanvraag wordt afgeleverd in een afgeschermd kanaal bij een berichtendienst en wordt
			uitsluitend daar bewaard. Indien de aflevering mislukt, wordt de aanvraag in de serverlogs
			geregistreerd teneinde verlies ervan te voorkomen.
		</p>

		<h2>3. Bezoekers van de website</h2>
		<p>Bij het bezoek aan de website worden de volgende gegevens verwerkt:</p>
		<ul>
			<li>
				per paginabezoek: het IP-adres, het type browser, de bezochte pagina, de verwijzende pagina
				en het land van herkomst, met als doel de opvolging van de werking van de website en de
				meting van de herkomst van bezoekers, waaronder de doeltreffendheid van advertenties;
			</li>
			<li>
				geaggregeerde bezoekersstatistieken, bijgehouden zonder cookies en zonder IP-adressen, door
				middel van een door de Verwerkingsverantwoordelijke zelf beheerd analyseprogramma op een
				server binnen de Europese Unie.
			</li>
		</ul>
		<p>
			De website plaatst geen cookies en laadt geen inhoud van derden. De verwerking steunt op het
			gerechtvaardigd belang van de Verwerkingsverantwoordelijke bij de goede werking en de
			opvolging van het bereik van de website (artikel 6.1.f AVG).
		</p>

		<h2>4. Verwerkers en doorgifte</h2>
		<p>
			Persoonsgegevens worden uitsluitend voor de vermelde taak gedeeld met de volgende categorieën
			van verwerkers:
		</p>
		<ul>
			<li>
				een hostingprovider met servers binnen de Europese Unie (website, serverlogs en
				statistieken);
			</li>
			<li>een berichtendienst voor de ontvangst van de aanvragen via het contactformulier.</li>
		</ul>
		<p>
			Beide verwerkers zijn gevestigd in de Verenigde Staten. Voor doorgifte buiten de Europese
			Economische Ruimte wordt gesteund op het EU-US Data Privacy Framework of op de
			standaardcontractbepalingen van de Europese Commissie. Persoonsgegevens worden niet verkocht.
		</p>

		<h2>5. Bewaring</h2>
		<p>Persoonsgegevens worden niet langer bewaard dan noodzakelijk voor de vermelde doeleinden:</p>
		<ul>
			<li>
				aanvragen via het contactformulier die niet tot een overeenkomst leiden: 6 maanden na
				ontvangst;
			</li>
			<li>
				gegevens van klanten: voor de duur van de contractuele relatie, en vervolgens gedurende de
				wettelijke bewaartermijnen inzake facturatie en boekhouding;
			</li>
			<li>serverlogs: 30 dagen, waarna zij worden gewist.</li>
		</ul>
		<p>De bezoekersstatistieken bevatten geen persoonsgegevens.</p>

		<h2>6. Uw rechten</h2>
		<p>
			Overeenkomstig de artikelen 15 tot en met 21 AVG beschikt u, binnen de grenzen van de wet,
			over het recht op inzage, verbetering, wissing, beperking van de verwerking, overdraagbaarheid
			van uw gegevens en bezwaar tegen de verwerking. Deze rechten kunnen worden uitgeoefend door
			middel van een verzoek aan <a href="mailto:{email}">{email}</a>. Op een verzoek wordt binnen
			een maand na ontvangst geantwoord.
		</p>

		<h2>7. Klacht en wijzigingen</h2>
		<p>
			U hebt het recht een klacht in te dienen bij de Gegevensbeschermingsautoriteit, Drukpersstraat
			35, 1000 Brussel,
			<a href="https://www.gegevensbeschermingsautoriteit.be" rel="noopener"
				>gegevensbeschermingsautoriteit.be</a
			>. De Verwerkingsverantwoordelijke behoudt zich het recht voor deze verklaring te wijzigen.
			Bij een wijziging wordt de datum bovenaan aangepast.
		</p>
	</article>
</section>

<style>
	.prose-privacy :global(h2) {
		margin-top: 2.5rem;
		margin-bottom: 0.75rem;
		font-family: var(--font-display);
		font-size: 1.5rem;
		font-weight: 800;
		line-height: 1.2;
		color: var(--color-ink);
	}
	.prose-privacy :global(h3) {
		margin-top: 1.5rem;
		font-weight: 700;
		color: var(--color-ink);
	}
	.prose-privacy :global(p),
	.prose-privacy :global(ul) {
		margin-top: 0.75rem;
	}
	.prose-privacy :global(h3 + p),
	.prose-privacy :global(h3 + ul) {
		margin-top: 0.25rem;
	}
	.prose-privacy :global(ul) {
		list-style: disc;
		padding-left: 1.25rem;
	}
	.prose-privacy :global(li + li) {
		margin-top: 0.5rem;
	}
	.prose-privacy :global(a) {
		color: var(--color-ink);
		text-decoration: underline;
		text-underline-offset: 3px;
	}
</style>
