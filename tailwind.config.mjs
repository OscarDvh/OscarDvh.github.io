import animations from '@midudev/tailwind-animations'

/** @type {import('tailw	indcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		animations,
		require('tailwind-scrollbar'),
	],
	colors: {
		'brownb': '#D9D9D9',
	}
}
