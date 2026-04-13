import type { RequestHandler } from './$types';
import geoip from 'geoip-lite';

export const prerender = false;

export const POST: RequestHandler = async ({ request }) => {
	const { page, referrer } = await request.json();

	const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
		|| request.headers.get('x-real-ip')
		|| 'unknown';

	const ua = request.headers.get('user-agent') || '-';
	const geo = ip !== 'unknown' ? geoip.lookup(ip) : null;

	console.log(JSON.stringify({
		type: 'visit',
		message: `User visited ${page}`,
		page,
		referrer: referrer || 'direct',
		ip,
		country: geo?.country || '??',
		city: geo?.city || '??',
		ua
	}));

	return new Response(null, { status: 204 });
};
