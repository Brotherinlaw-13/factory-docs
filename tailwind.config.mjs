import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#4BB094',
          light: '#6CC4AB',
          lighter: '#8ED4BF',
          dark: '#3A8D76',
          darker: '#2A6B59',
        },
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-links': '#4BB094',
            '--tw-prose-bold': theme('colors.white'),
            'a:hover': {
              color: '#6CC4AB',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
