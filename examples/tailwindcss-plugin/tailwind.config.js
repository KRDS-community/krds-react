/** @type {import('tailwindcss').Config} */
import krdsPlugin from '@krds-ui/tailwindcss-plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [krdsPlugin],
};
