export type Spacing = 'none' | '1x' | '2x' | '3x' | '4x' | '5x';
export type Radius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

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
