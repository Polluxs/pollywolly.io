import type { RequestHandler } from './$types';

export const prerender = false;

export const POST: RequestHandler = async ({ request }) => {
	const { page, referrer } = await request.json();

	const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
		|| request.headers.get('x-real-ip')
		|| 'unknown';

	const ua = request.headers.get('user-agent') || '-';
	const country = request.headers.get('cf-ipcountry')
		|| request.headers.get('x-vercel-ip-country')
		|| request.headers.get('x-country')
		|| '??';

	console.log(JSON.stringify({ type: 'visit', page, referrer: referrer || 'direct', ip, country, ua }));

	return new Response(null, { status: 204 });
};
