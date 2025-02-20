import animations from '@midudev/tailwind-animations';
import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    animations,
    tailwindScrollbar
  ],
  colors: {
    'brownb': '#D9D9D9',
  }
};
