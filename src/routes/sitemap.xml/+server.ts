import type { RequestHandler } from './$types';

const DOMAIN = 'https://pollywolly.io';

const pages = [
	{ url: '/', changefreq: 'weekly', priority: '1.0' },
	{ url: '/blog/facebook-killed-my-site', changefreq: 'monthly', priority: '0.9' }
];

export const GET: RequestHandler = () => {
	const urls = pages.map(
		(p) => `
	<url>
		<loc>${DOMAIN}${p.url}</loc>
		<changefreq>${p.changefreq}</changefreq>
		<priority>${p.priority}</priority>
	</url>`
	);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>`;

	return new Response(xml.trim(), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=86400'
		}
	});
};
