import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				writing: 'src/lib/components/Post-Layout.svelte'
			}
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
