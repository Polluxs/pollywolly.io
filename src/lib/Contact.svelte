<script lang="ts">
	// The two ways to get in touch: the booking agenda and the call-me-back form.
	// Shared by the homepage and the ad landing page, so both stay identical.
	let {
		bookingUrl,
		phone,
		class: className = ''
	}: { bookingUrl: string; phone: string; class?: string } = $props();

	const messageChips = [
		'Onze planning zit in Excel',
		'We typen alles twee keer over',
		'Ons pakket kan niet wat wij willen',
		'Alles hangt af van één collega'
	];
	let message = $state('');
</script>

<div class="grid gap-5 lg:grid-cols-[1.1fr_1fr] {className}">
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
			<p class="text-snow-dim">Liever meteen bellen? Ik neem op als ik kan, anders bel ik terug.</p>
			<a href="tel:{phone}" class="display mt-2 inline-block text-2xl text-snow hover:text-signal"
				>{phone}</a
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
