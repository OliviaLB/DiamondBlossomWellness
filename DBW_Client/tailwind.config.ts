import type { Config } from 'tailwindcss';

const scale = (name: string) => ({
  DEFAULT: `var(--color-${name})`,
  100: `var(--color-${name}-100)`,
  200: `var(--color-${name}-200)`,
  300: `var(--color-${name}-300)`,
  400: `var(--color-${name}-400)`,
  500: `var(--color-${name}-500)`,
  600: `var(--color-${name}-600)`,
  700: `var(--color-${name}-700)`,
  800: `var(--color-${name}-800)`,
  900: `var(--color-${name}-900)`
});

const statusTriad = (name: string) => ({
  bg: `var(--color-${name}-bg)`,
  border: `var(--color-${name}-border)`,
  text: `var(--color-${name}-text)`,
  'bg-dark': `var(--color-${name}-bg-dark)`,
  'border-dark': `var(--color-${name}-border-dark)`,
  'text-dark': `var(--color-${name}-text-dark)`
});

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: scale('primary'),
        secondary: scale('secondary'),
        tertiary: scale('tertiary'),
        accent: scale('accent'),
        success: statusTriad('success'),
        warning: statusTriad('warning'),
        danger: statusTriad('danger'),
        surface: {
          app: 'var(--surface-app-bg)',
          canvas: 'var(--surface-canvas)',
          card: 'var(--surface-card)',
          'card-raised': 'var(--surface-card-raised)',
          sunken: 'var(--surface-sunken)',
          border: 'var(--surface-border)',
          'border-strong': 'var(--surface-border-strong)',
          divider: 'var(--surface-divider)',
          inverse: 'var(--surface-inverse)',
          'inverse-card': 'var(--surface-inverse-card)'
        },
        text: {
          primary: 'var(--type-primary)',
          secondary: 'var(--type-secondary)',
          contrast: 'var(--type-contrast)',
          muted: 'var(--type-muted)',
          link: 'var(--type-link)',
          'link-hover': 'var(--type-link-hover)'
        },
        overlay: {
          light: 'var(--overlay-light)',
          dark: 'var(--overlay-dark)'
        }
      },
      fontFamily: {
        display: 'var(--font-display)',
        heading: 'var(--font-heading)',
        body: 'var(--font-body)'
      }
    }
  },
  plugins: []
};

export default config;
