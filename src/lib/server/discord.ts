import { env } from '$env/dynamic/private';

type ContactRequest = {
	name: string;
	via: 'bel' | 'email';
	phone: string;
	email: string;
	bestTime: string;
	message: string;
	page: string;
};

// Discord rejects empty field values and caps them at 1024 characters.
const value = (text: string) => (text ? text.slice(0, 1024) : '-');

// Posts a new contact request to the Discord channel, the only place it is kept.
// Returns false on any failure so the visitor can be told to call instead.
export async function notifyDiscord(request: ContactRequest): Promise<boolean> {
	try {
		if (!env.DISCORD_WEBHOOK_URL) throw new Error('DISCORD_WEBHOOK_URL is not set');

		const response = await fetch(env.DISCORD_WEBHOOK_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			signal: AbortSignal.timeout(5000),
			body: JSON.stringify({
				// Visitor input must never ping @everyone or a role.
				allowed_mentions: { parse: [] },
				embeds: [
					{
						title: `${request.via === 'email' ? 'Mail' : 'Bel'}: ${request.name}`.slice(0, 256),
						color: 0xffe14d, // --color-signal
						fields: [
							...(request.via === 'email'
								? [{ name: 'E-mail', value: value(request.email) }]
								: [
										{ name: 'Telefoon', value: value(request.phone), inline: true },
										{ name: 'Wanneer', value: value(request.bestTime), inline: true }
									]),
							{ name: 'Wat loopt er vast', value: value(request.message) },
							{ name: 'Pagina', value: value(request.page), inline: true }
						],
						timestamp: new Date().toISOString()
					}
				]
			})
		});
		if (!response.ok) throw new Error(`Discord answered ${response.status}`);
		return true;
	} catch (err) {
		// Log the whole submission so the lead can still be recovered from the logs.
		console.error(JSON.stringify({ type: 'discord_error', message: String(err), request }));
		return false;
	}
}
