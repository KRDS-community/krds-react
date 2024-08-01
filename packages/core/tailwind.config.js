/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import krdsPlugin from '@krds-ui/tailwindcss-plugin';

export default {
  content: ['./lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard GOV Variable',
          'Pretendard GOV',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [krdsPlugin],
};
