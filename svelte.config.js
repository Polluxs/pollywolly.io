import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter(),
		// Inline the stylesheet into the HTML: one round trip less before the first paint.
		inlineStyleThreshold: 64 * 1024
	}
};

export default config;
