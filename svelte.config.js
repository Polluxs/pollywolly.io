import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

const highlighter = await createHighlighter({
	themes: ['github-dark-default'],
	langs: ['javascript', 'typescript', 'bash', 'sql', 'json', 'text']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: (code, lang) => {
					const html = highlighter.codeToHtml(code, {
						lang: lang || 'text',
						theme: 'github-dark-default'
					});
					return `{@html \`${html.replace(/`/g, '\\`')}\`}`;
				}
			}
		})
	],
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter()
	}
};

export default config;
