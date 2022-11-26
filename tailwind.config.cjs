const defaultTheme = require('tailwindcss/defaultTheme');

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
					1000: "#0D1423",
        }
      }
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
