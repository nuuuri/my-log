import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        point: 'var(--point)',
        'zinc-450': '#898992',
        'zinc-550': '#62626a',
      },
    },
    fontFamily: {
      poppins: ['var(--font-poppins)', 'sans-serif'],
      roboto: ['var(--font-roboto)', 'sans-serif'],
      nanumGothic: ['var(--font-nanum-gothic)', 'sans-serif'],
      gothicA1: ['var(--font-gothic-a1)', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
