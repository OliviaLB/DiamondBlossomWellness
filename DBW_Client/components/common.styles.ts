export type Spacing = 'none' | '1x' | '2x' | '3x' | '4x' | '5x';
export type Radius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export type TextColour =
  | 'primary'
  | 'secondary'
  | 'contrast'
  | 'muted'
  | 'link'
  | 'link-hover'
  | 'success'
  | 'warning'
  | 'danger'
  | 'success-dark'
  | 'warning-dark'
  | 'danger-dark';

export type BackgroundColour =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'app'
  | 'canvas'
  | 'card'
  | 'card-raised'
  | 'sunken'
  | 'inverse'
  | 'inverse-card'
  | 'success'
  | 'warning'
  | 'danger'
  | 'success-dark'
  | 'warning-dark'
  | 'danger-dark';

export type BorderColour =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'default'
  | 'strong'
  | 'divider'
  | 'success'
  | 'warning'
  | 'danger'
  | 'success-dark'
  | 'warning-dark'
  | 'danger-dark';

/**
 * Margin/padding scale shared by every component that offers spacing props
 * (`Button`, `Box`, ...) - kept in one place so the scale, and the Tailwind
 * classes behind it, can't drift between them.
 */
export const MARGINX: Record<Spacing, string> = {
  none: 'mx-0',
  '1x': 'mx-2',
  '2x': 'mx-4',
  '3x': 'mx-6',
  '4x': 'mx-8',
  '5x': 'mx-10'
};

export const MARGINY: Record<Spacing, string> = {
  none: 'my-0',
  '1x': 'my-2',
  '2x': 'my-4',
  '3x': 'my-6',
  '4x': 'my-8',
  '5x': 'my-10'
};

export const PADDINGX: Record<Spacing, string> = {
  none: 'px-0',
  '1x': 'px-2',
  '2x': 'px-4',
  '3x': 'px-6',
  '4x': 'px-8',
  '5x': 'px-10'
};

export const PADDINGY: Record<Spacing, string> = {
  none: 'py-0',
  '1x': 'py-2',
  '2x': 'py-4',
  '3x': 'py-6',
  '4x': 'py-8',
  '5x': 'py-10'
};

/** Uniform corner-radius scale shared by every component that offers a `borderRadius` prop. */
export const BORDERRADIUS: Record<Radius, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full'
};

/** Text colour scale shared by every component that offers a `colour`/`textColour` prop. */
export const TEXTCOLOURS: Record<TextColour, string> = {
  primary: 'text-ink-primary',
  secondary: 'text-ink-secondary',
  contrast: 'text-ink-contrast',
  muted: 'text-ink-muted',
  link: 'text-ink-link',
  'link-hover': 'text-ink-link-hover',
  success: 'text-success-ink',
  warning: 'text-warning-ink',
  danger: 'text-danger-ink',
  'success-dark': 'text-success-ink-dark',
  'warning-dark': 'text-warning-ink-dark',
  'danger-dark': 'text-danger-ink-dark'
};

/** Background colour scale shared by every component that offers a `backgroundColour` prop. */
export const BACKGROUNDCOLOURS: Record<BackgroundColour, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
  accent: 'bg-accent',
  app: 'bg-surface-app',
  canvas: 'bg-surface-canvas',
  card: 'bg-surface-card',
  'card-raised': 'bg-surface-card-raised',
  sunken: 'bg-surface-sunken',
  inverse: 'bg-surface-inverse',
  'inverse-card': 'bg-surface-inverse-card',
  success: 'bg-success-subtle',
  warning: 'bg-warning-subtle',
  danger: 'bg-danger-subtle',
  'success-dark': 'bg-success-subtle-dark',
  'warning-dark': 'bg-warning-subtle-dark',
  'danger-dark': 'bg-danger-subtle-dark'
};

/** Border colour scale shared by every component that offers a `borderColour` prop. */
export const BORDERCOLOURS: Record<BorderColour, string> = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  tertiary: 'border-tertiary',
  accent: 'border-accent',
  default: 'border-line',
  strong: 'border-line-strong',
  divider: 'border-line-divider',
  success: 'border-success-edge',
  warning: 'border-warning-edge',
  danger: 'border-danger-edge',
  'success-dark': 'border-success-edge-dark',
  'warning-dark': 'border-warning-edge-dark',
  'danger-dark': 'border-danger-edge-dark'
};
