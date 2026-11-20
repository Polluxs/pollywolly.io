import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { notifyDiscord } from '$lib/server/discord';

export const prerender = false;

const field = (data: FormData, key: string, max: number) => {
	const value = data.get(key);
	return typeof value === 'string' ? value.trim().slice(0, max) : '';
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		// Honeypot: people never see this field, bots fill it in. Pretend it worked.
		if (field(data, 'website', 200)) return { success: true };

		const name = field(data, 'naam', 200);
		const choice = field(data, 'via', 10);
		const message = field(data, 'vast', 2000);
		const page = field(data, 'pagina', 200);

		if (!name) return fail(400, { error: 'Vul uw naam in.' });
		if (choice !== 'bel' && choice !== 'email') {
			return fail(400, { error: 'Kies of ik u bel of mail.' });
		}
		const via = choice;

		// Only keep the fields that belong to the chosen way of contact.
		const phone = via === 'bel' ? field(data, 'tel', 50) : '';
		const bestTime = via === 'bel' ? field(data, 'wanneer', 200) : '';
		const email = via === 'email' ? field(data, 'email', 200) : '';

		if (via === 'bel' && !phone) return fail(400, { error: 'Vul uw telefoonnummer in.' });
		if (via === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return fail(400, { error: 'Vul een geldig e-mailadres in.' });
		}

		if (!(await notifyDiscord({ name, via, phone, bestTime, email, message, page }))) {
			return fail(500, { error: 'Er liep iets mis. Bel mij gerust rechtstreeks.' });
		}

		console.log(
			JSON.stringify({ type: 'contact', message: `Contact request (${via}) from ${page}`, page })
		);
		return { success: true, via };
	}
};
