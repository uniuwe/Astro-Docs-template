const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,mdx,svelte,ts,tsx}'],
	theme: {
		screens: {
			xxs: '360px',
			xs: '480px', // => @media (min-width: 480px) { ... }
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				sans: ['InterVar', ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				'move-bg': {
					to: {
						backgroundPosition: '400% 0',
					},
				},
			},
			animation: {
				'move-bg': 'move-bg 8s infinite linear',
			},
			aspectRatio: {
				auto: 'auto',
				square: '1 / 1',
				video: '16 / 9',
				landscape: '4 / 3',
				portrait: '3 / 4',
				widescreen: '16 / 9',
				ultrawide: '18 / 5',
				golden: '1.6180 / 1',
			},
			colors: {
				slate: {
					1000: '#0D1423',
				},
				base: {
					...colors.slate,
				},
			},
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
				highlight: '0 0px 15px -10px rgba(0, 0, 0, 0.3),0 0px 25px -2px rgba(0, 0, 0, 0.3)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		function ({ addVariant }) {
			addVariant(
				'supports-backdrop-blur',
				'@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
			);
			addVariant('supports-scrollbars', '@supports selector(::-webkit-scrollbar)');
			addVariant('children', '& > *');
			addVariant('scrollbar', '&::-webkit-scrollbar');
			addVariant('scrollbar-track', '&::-webkit-scrollbar-track');
			addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb');
		},
	],
};
