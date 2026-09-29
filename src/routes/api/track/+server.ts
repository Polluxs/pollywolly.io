import type { RequestHandler } from './$types';

export const prerender = false;

// Keep log fields bounded so a hostile crawler cannot grow log lines without limit.
const cap = (value: string | null | undefined, max: number) => (value ? value.slice(0, max) : '');

const str = (value: unknown, max: number) => (typeof value === 'string' ? cap(value, max) : '');

export const POST: RequestHandler = async ({ request }) => {
	let body: { page?: unknown; referrer?: unknown } | null;

	try {
		body = await request.json();
	} catch {
		return new Response(null, { status: 204 });
	}

	const page = str(body?.page, 200);
	const referrer = str(body?.referrer, 200);

	const ip =
		cap(request.headers.get('x-forwarded-for')?.split(',')[0]?.trim(), 64) ||
		cap(request.headers.get('x-real-ip'), 64) ||
		'unknown';

	// Country comes from the proxy when it offers one. No local database.
	const country =
		request.headers.get('cf-ipcountry') || request.headers.get('x-vercel-ip-country') || '??';

	console.log(
		JSON.stringify({
			type: 'visit',
			message: `User visited ${page}`,
			page,
			referrer: referrer || 'direct',
			ip,
			country,
			ua: cap(request.headers.get('user-agent'), 200)
		})
	);

	return new Response(null, { status: 204 });
};
