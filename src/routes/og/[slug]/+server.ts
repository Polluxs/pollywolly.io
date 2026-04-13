import type { RequestHandler } from './$types';

const posts: Record<string, { title: string; description: string }> = {
	'facebook-killed-my-site': {
		title: 'facebook killed my site',
		description: 'how meta-externalagent DDoSed my 1.9M page SvelteKit site'
	}
};

export const GET: RequestHandler = ({ params }) => {
	const post = posts[params.slug];
	if (!post) return new Response('Not found', { status: 404 });

	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
	<rect width="1200" height="630" fill="#1e1f22"/>
	<rect x="0" y="0" width="1200" height="4" fill="#f2a860"/>

	<text x="80" y="120" font-family="sans-serif" font-size="20" font-weight="500" fill="#f2a860" letter-spacing="3">POLLYWOLLY.IO</text>

	<text x="80" y="260" font-family="sans-serif" font-size="64" font-weight="700" fill="#dbdee1">${escapeXml(post.title)}</text>

	<text x="80" y="340" font-family="sans-serif" font-size="26" fill="#949ba4">${escapeXml(post.description)}</text>

	<text x="80" y="560" font-family="sans-serif" font-size="20" fill="#6d6f78">thomas dorissen</text>
	<text x="1120" y="560" font-family="sans-serif" font-size="20" fill="#6d6f78" text-anchor="end">@DorissenThomas</text>
</svg>`;

	return new Response(svg, {
		headers: {
			'Content-Type': 'image/svg+xml',
			'Cache-Control': 'public, max-age=604800'
		}
	});
};

function escapeXml(str: string): string {
	return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
