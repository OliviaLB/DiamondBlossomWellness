import type { Config } from 'tailwindcss';

type ThemeExtend = NonNullable<NonNullable<Config['theme']>['extend']>;

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

/**
 * Sub-keys deliberately avoid "bg"/"border"/"text" so the resulting Tailwind
 * classes never stutter with their utility prefix, e.g. bg-success-subtle,
 * border-success-edge, text-success-ink (not bg-success-bg, etc.).
 */
const statusTriad = (name: string) => ({
  subtle: `var(--color-${name}-subtle)`,
  edge: `var(--color-${name}-edge)`,
  ink: `var(--color-${name}-ink)`,
  'subtle-dark': `var(--color-${name}-subtle-dark)`,
  'edge-dark': `var(--color-${name}-edge-dark)`,
  'ink-dark': `var(--color-${name}-ink-dark)`
});

const themeExtend: ThemeExtend = {
  colors: {
    primary: scale('primary'),
    secondary: scale('secondary'),
    tertiary: scale('tertiary'),
    accent: scale('accent'),
    success: statusTriad('success'),
    warning: statusTriad('warning'),
    danger: statusTriad('danger'),
    surface: {
      app: 'var(--surface-app)',
      canvas: 'var(--surface-canvas)',
      card: 'var(--surface-card)',
      'card-raised': 'var(--surface-card-raised)',
      sunken: 'var(--surface-sunken)',
      inverse: 'var(--surface-inverse)',
      'inverse-card': 'var(--surface-inverse-card)'
    },
    line: {
      DEFAULT: 'var(--line)',
      strong: 'var(--line-strong)',
      divider: 'var(--line-divider)'
    },
    ink: {
      primary: 'var(--ink-primary)',
      secondary: 'var(--ink-secondary)',
      contrast: 'var(--ink-contrast)',
      muted: 'var(--ink-muted)',
      link: 'var(--ink-link)',
      'link-hover': 'var(--ink-link-hover)'
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
};

export default themeExtend;
