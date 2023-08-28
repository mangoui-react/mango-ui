import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          text: 'var(--primary-text-color)',
          // bg: '#E8FEE7',
        },
        component: {
          bg: 'var(--component-bg)',
        },
        disabled: {
          bg: 'var(--disabled-bg)',
          border: 'var(--disabled-border)',
          text: 'var(--disabled-text)',
        },
        border: {
          DEFAULT: 'var(--border)',
          inner: 'var(--border-inner)',
        },
        avatar: {
          bg: 'var(--avatar-bg)',
          text: 'var(--avatar-text)',
        },
        background: {
          DEFAULT: 'var(--background-end)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
