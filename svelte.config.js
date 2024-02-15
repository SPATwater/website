import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			handleMissingId: 'warn'
		},
		adapter: adapter()
	}
};

export default config;
