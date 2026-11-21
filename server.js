// Production entry point. Wraps the adapter-node handler so every response, including the
// prerendered pages (which never reach hooks.server.ts), gets the security headers.
import { createServer } from 'node:http';
import { handler } from './build/handler.js';

const securityHeaders = {
	'Strict-Transport-Security': 'max-age=31536000',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Content-Security-Policy': "frame-ancestors 'none'",
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

const server = createServer((req, res) => {
	for (const [name, value] of Object.entries(securityHeaders)) res.setHeader(name, value);

	// One host for search engines: www.pollywolly.io permanently redirects to the apex.
	const host = (req.headers.host ?? '').toLowerCase();
	if (host.startsWith('www.')) {
		res.writeHead(301, { Location: `https://${host.slice(4)}${req.url ?? '/'}` });
		res.end();
		return;
	}

	handler(req, res, () => {
		res.statusCode = 404;
		res.end();
	});
});

server.listen(Number(process.env.PORT ?? 3000), process.env.HOST ?? '0.0.0.0', () => {
	console.log(`Listening on ${process.env.HOST ?? '0.0.0.0'}:${process.env.PORT ?? 3000}`);
});

for (const signal of ['SIGTERM', 'SIGINT']) {
	process.on(signal, () => server.close(() => process.exit(0)));
}
