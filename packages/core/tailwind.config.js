/** @type {import('tailwindcss').Config} */
import krdsPlugin from '@krds-ui/tailwindcss-plugin';

export default {
  content: ['./lib/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  plugins: [krdsPlugin],
};
