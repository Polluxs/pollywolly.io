import type { RequestHandler } from './$types';

const DOMAIN = 'https://pollywolly.io';

// Indexable pages only: /gesprek and /cases/* are noindex on purpose.
// lastmod is kept by hand (the Docker build has no git). Change it only when the page content changes.
const pages = [
	{ url: '/', lastmod: '2026-11-21' },
	{ url: '/contact', lastmod: '2026-11-21' },
	{ url: '/privacy', lastmod: '2026-11-21' }
];

export const GET: RequestHandler = () => {
	const urls = pages.map(
		(p) => `
	<url>
		<loc>${DOMAIN}${p.url}</loc>
		<lastmod>${p.lastmod}</lastmod>
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
