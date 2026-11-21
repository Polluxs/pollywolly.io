<script lang="ts">
	import { enhance } from '$app/forms';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { trackEvent } from '$lib/umami';

	// The contact form (call me or email me) with the phone number beside it.
	// Shared by the homepage, the ad landing page and /contact, so all three stay identical.
	type Result = { success?: boolean; via?: string; error?: string } | null | undefined;
	let {
		phone,
		result = null,
		class: className = ''
	}: { phone: string; result?: Result; class?: string } = $props();

	const messageChips = [
		'Onze planning zit in Excel',
		'We typen alles twee keer over',
		'Ons pakket kan niet wat wij willen',
		'Alles hangt af van één collega'
	];
	let message = $state('');
	let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let error = $state('');
	let via = $state('');

	// Without JavaScript the form posts to /contact, which hands the outcome back as `result`.
	const shown = $derived({
		status:
			status !== 'idle' ? status : result?.success ? 'sent' : result?.error ? 'error' : 'idle',
		error: error || result?.error || '',
		via: via || result?.via || ''
	});

	const input =
		'mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-3 text-base font-normal';
	const choice =
		'flex cursor-pointer items-center justify-center rounded-lg border border-line bg-paper px-4 py-3 text-base font-semibold has-[:checked]:border-ink has-[:checked]:bg-signal has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-signal';
</script>

<div class="grid gap-5 lg:grid-cols-[1.6fr_1fr] {className}">
	<form
		class="group card p-8 sm:p-10"
		method="POST"
		action="/contact"
		use:enhance={() => {
			status = 'sending';
			return async ({ result, formElement }) => {
				if (result.type === 'success') {
					status = 'sent';
					via = String(new FormData(formElement).get('via') ?? '');
					trackEvent('contact_submit', { via, page: page.url.pathname });
				} else {
					status = 'error';
					error =
						result.type === 'failure' && typeof result.data?.error === 'string'
							? result.data.error
							: 'Er liep iets mis. Bel mij gerust rechtstreeks.';
				}
			};
		}}
	>
		<input type="hidden" name="pagina" value={page.url.pathname} />
		<!-- Honeypot for bots; hidden from people and screen readers. -->
		<input
			type="text"
			name="website"
			tabindex="-1"
			autocomplete="off"
			aria-hidden="true"
			class="absolute -left-[9999px] h-0 w-0 opacity-0"
		/>
		<div class="flex items-start justify-between gap-4">
			<h3 class="display text-3xl sm:text-4xl">Neem contact op</h3>
			<img
				src="/illustrations/koffie.webp"
				srcset="/illustrations/koffie-320.webp 320w, /illustrations/koffie.webp 640w"
				sizes="(min-width: 640px) 112px, 96px"
				alt=""
				width="320"
				height="320"
				loading="lazy"
				class="-mt-3 -mr-2 w-24 shrink-0 sm:w-28"
			/>
		</div>
		<p class="mt-2 text-ink-dim">
			U hoort binnen één werkdag van mij. Gratis, geen verplichtingen.
		</p>

		<div class="mt-6 grid gap-4 sm:grid-cols-2">
			<label class="block text-sm font-semibold sm:col-span-2" for="naam"
				>Naam
				<input id="naam" name="naam" type="text" required autocomplete="name" class={input} />
			</label>

			<fieldset class="sm:col-span-2">
				<legend class="text-sm font-semibold">Hoe neem ik contact op?</legend>
				<div class="mt-1.5 grid grid-cols-2 gap-3">
					<label class={choice}
						><input type="radio" name="via" value="bel" required class="sr-only" />Bel me</label
					>
					<label class={choice}
						><input type="radio" name="via" value="email" class="sr-only" />Ik verkies e-mail</label
					>
				</div>
			</fieldset>

			<!-- Shown by CSS, not JavaScript, so the choice also works without scripts. -->
			<label class="hidden text-sm font-semibold group-has-[[value=bel]:checked]:block" for="tel"
				>Telefoon
				<input id="tel" name="tel" type="tel" autocomplete="tel" class={input} />
			</label>
			<label
				class="hidden text-sm font-semibold group-has-[[value=bel]:checked]:block"
				for="wanneer"
				>Wanneer best bereikbaar?
				<input
					id="wanneer"
					name="wanneer"
					type="text"
					placeholder="bv. voormiddag, na 17u"
					class={input}
				/>
			</label>
			<label
				class="hidden text-sm font-semibold group-has-[[value=email]:checked]:block sm:col-span-2"
				for="email"
				>E-mailadres
				<input id="email" name="email" type="email" autocomplete="email" class={input} />
			</label>

			<label class="block text-sm font-semibold sm:col-span-2" for="vast"
				>Wat loopt er vast? <span class="font-normal text-ink-dim">(optioneel)</span>
				<span class="mt-2 flex flex-wrap gap-2">
					{#each messageChips as chip (chip)}
						<button
							type="button"
							class="min-h-11 rounded-full border border-line bg-paper px-3 py-1.5 text-sm font-normal hover:border-ink"
							onclick={() => (message = chip)}>{chip}</button
						>
					{/each}
				</span>
				<textarea id="vast" name="vast" bind:value={message} rows="3" class={input}></textarea>
			</label>
		</div>

		{#if shown.status === 'sent'}
			<p class="mt-6 rounded-lg bg-paper px-4 py-3 font-semibold" role="status">
				Goed ontvangen. {shown.via === 'email'
					? 'U krijgt binnen één werkdag een mail van mij.'
					: 'Ik bel u binnen één werkdag.'}
			</p>
		{:else}
			{#if shown.status === 'error'}
				<p class="mt-6 font-semibold text-red-700" role="alert">{shown.error}</p>
			{/if}
			<button
				class="btn-signal mt-6 w-full justify-center sm:w-auto"
				disabled={status === 'sending'}
				>{status === 'sending' ? 'Even geduld...' : 'Verstuur'}</button
			>
			<p class="mt-4 text-sm text-ink-dim">
				Ik gebruik uw gegevens alleen om u te contacteren.
				<a href={resolve('/privacy')} class="underline underline-offset-2">Meer over privacy</a>
			</p>
		{/if}
	</form>
	<div class="flex flex-col rounded-[1.25rem] bg-ink p-8 text-snow sm:p-10">
		<p class="text-[0.8rem] font-semibold tracking-[0.2em] text-signal uppercase">
			Liever meteen bellen?
		</p>
		<a
			href="tel:{phone.replace(/\s/g, '')}"
			class="display mt-3 inline-block text-3xl text-snow hover:text-signal sm:text-4xl">{phone}</a
		>
		<p class="mt-3 text-lg text-snow-dim">Ik neem op als ik kan, anders bel ik terug.</p>
		<p class="mt-auto border-t border-night-line pt-8 text-snow-dim">
			U spreekt mij, de persoon die het ook bouwt. Geen verkoper.
		</p>
	</div>
</div>
