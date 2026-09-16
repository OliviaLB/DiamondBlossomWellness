import type { Config } from 'tailwindcss';

import themeExtend from './theme.config';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: themeExtend
  },
  plugins: []
};

export default config;
