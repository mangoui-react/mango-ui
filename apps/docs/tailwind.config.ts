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
        info: {
          DEFAULT: 'var(--info)',
        },
        success: {
          DEFAULT: 'var(--success)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
        },
        error: {
          DEFAULT: 'var(--error)',
        },
      },
      keyframes: {
        // wiggle: {
        //   '0%, 100%': { transform: 'rotate(-3deg)' },
        //   '50%': { transform: 'rotate(3deg)' },
        // },
        'collapse-open': {
          '0%': {
            height: '0px',
          },
          '100%': {
            height: 'auto',
          },
        },
        'collapse-closed': {
          '0%': {
            height: 'auto',
          },
          '100%': {
            height: '0px',
          },
        },
      },
      animation: {
        // wiggle: 'wiggle 1s ease-in-out infinite',
        'collapse-open': 'collapse-open 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'collapse-closed': 'collapse-closed 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
