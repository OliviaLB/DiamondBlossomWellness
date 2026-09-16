import clsx from 'clsx';
import type { CSSProperties } from 'react';
import { BORDERRADIUS, MARGINX, MARGINY, PADDINGX, PADDINGY } from '../../common.styles';

import type {
  Align,
  BackgroundColour,
  BorderColour,
  BoxLayoutProps,
  Display,
  FlexDirection,
  Gap,
  Justify,
  Radius,
  Shadow
} from './Box.types';

export const DISPLAY: Record<Display, string> = {
  block: 'block',
  'inline-block': 'inline-block',
  flex: 'flex',
  'inline-flex': 'inline-flex',
  grid: 'grid',
  'inline-grid': 'inline-grid',
  none: 'hidden'
};

export const DIRECTION: Record<FlexDirection, string> = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse'
};

export const ALIGN: Record<Align, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline'
};

export const JUSTIFY: Record<Justify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly'
};

export const GAP: Record<Gap, string> = {
  none: 'gap-0',
  '1x': 'gap-2',
  '2x': 'gap-4',
  '3x': 'gap-6',
  '4x': 'gap-8',
  '5x': 'gap-10'
};

/** Box-shadow size, Tailwind's built-in scale. Colour comes from `--tw-shadow-color` (see {@link getColourStyle}), not this class alone. */
export const SHADOW: Record<Shadow, string> = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl'
};

// Per-corner counterparts of the shared BORDERRADIUS scale (see
// Common.styles.ts) - `'md'` maps to the bare `rounded-{corner}` utility,
// matching how `'md'` maps to bare `rounded` in BORDERRADIUS.
export const RADIUS_TOP_LEFT: Record<Radius, string> = {
  none: 'rounded-tl-none',
  sm: 'rounded-tl-sm',
  md: 'rounded-tl',
  lg: 'rounded-tl-lg',
  xl: 'rounded-tl-xl',
  '2xl': 'rounded-tl-2xl',
  full: 'rounded-tl-full'
};

export const RADIUS_TOP_RIGHT: Record<Radius, string> = {
  none: 'rounded-tr-none',
  sm: 'rounded-tr-sm',
  md: 'rounded-tr',
  lg: 'rounded-tr-lg',
  xl: 'rounded-tr-xl',
  '2xl': 'rounded-tr-2xl',
  full: 'rounded-tr-full'
};

export const RADIUS_BOTTOM_RIGHT: Record<Radius, string> = {
  none: 'rounded-br-none',
  sm: 'rounded-br-sm',
  md: 'rounded-br',
  lg: 'rounded-br-lg',
  xl: 'rounded-br-xl',
  '2xl': 'rounded-br-2xl',
  full: 'rounded-br-full'
};

export const RADIUS_BOTTOM_LEFT: Record<Radius, string> = {
  none: 'rounded-bl-none',
  sm: 'rounded-bl-sm',
  md: 'rounded-bl',
  lg: 'rounded-bl-lg',
  xl: 'rounded-bl-xl',
  '2xl': 'rounded-bl-2xl',
  full: 'rounded-bl-full'
};

/** Resolves {@link BoxLayoutProps} into Tailwind utility classes. `className` (caller overrides) is appended last. */
export const getLayoutClassName = (
  {
    align,
    border,
    borderBottom,
    borderLeft,
    borderRadius,
    borderRight,
    borderTop,
    direction,
    display,
    fullScreen,
    fullWidth,
    gap,
    justify,
    marginX,
    marginY,
    paddingX,
    paddingY,
    radiusBottomLeft,
    radiusBottomRight,
    radiusTopLeft,
    radiusTopRight,
    shadow
  }: BoxLayoutProps,
  className?: string
): string =>
  clsx(
    display && DISPLAY[display],
    direction && DIRECTION[direction],
    align && ALIGN[align],
    justify && JUSTIFY[justify],
    gap && GAP[gap],
    fullWidth && 'w-full',
    fullScreen && 'w-screen h-screen',
    marginX && MARGINX[marginX],
    marginY && MARGINY[marginY],
    paddingX && PADDINGX[paddingX],
    paddingY && PADDINGY[paddingY],
    (border || borderTop) && 'border-t',
    (border || borderRight) && 'border-r',
    (border || borderBottom) && 'border-b',
    (border || borderLeft) && 'border-l',
    shadow && SHADOW[shadow],
    borderRadius && BORDERRADIUS[borderRadius],
    radiusTopLeft && RADIUS_TOP_LEFT[radiusTopLeft],
    radiusTopRight && RADIUS_TOP_RIGHT[radiusTopRight],
    radiusBottomRight && RADIUS_BOTTOM_RIGHT[radiusBottomRight],
    radiusBottomLeft && RADIUS_BOTTOM_LEFT[radiusBottomLeft],
    className
  );

// Raw CSS custom-property values behind BORDERCOLOURS/BACKGROUNDCOLOURS
// (see common.styles.ts) - Box resolves colour via inline style rather than
// Tailwind classes so each of borderTop/Right/Bottom/Left can independently
// override `border`, which a static `border-{colour}` utility class can't do.
const BORDER_COLOUR_VALUE: Record<BorderColour, string> = {
  primary: 'var(--line-primary)',
  secondary: 'var(--line-secondary)',
  tertiary: 'var(--line-tertiary)',
  accent: 'var(--line-accent)',
  disabled: 'var(--line-disabled)',
  success: 'var(--color-success-edge)',
  warning: 'var(--color-warning-edge)',
  danger: 'var(--color-danger-edge)'
};

const BACKGROUND_COLOUR_VALUE: Record<BackgroundColour, string> = {
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  tertiary: 'var(--color-tertiary)',
  accent: 'var(--color-accent)',
  app: 'var(--surface-app)',
  canvas: 'var(--surface-canvas)',
  card: 'var(--surface-card)',
  'card-raised': 'var(--surface-card-raised)',
  sunken: 'var(--surface-sunken)',
  inverse: 'var(--surface-inverse)',
  'inverse-card': 'var(--surface-inverse-card)',
  success: 'var(--color-success-subtle)',
  warning: 'var(--color-warning-subtle)',
  danger: 'var(--color-danger-subtle)'
};

/** Resolves the border/background colour props into inline `style` - each border side falls back to the uniform `border` colour when not itself set. */
export const getColourStyle = ({
  background,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop
}: Pick<
  BoxLayoutProps,
  'background' | 'border' | 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft'
>): CSSProperties => {
  const top = borderTop ?? border;
  const right = borderRight ?? border;
  const bottom = borderBottom ?? border;
  const left = borderLeft ?? border;

  return {
    ...(top && { borderTopColor: BORDER_COLOUR_VALUE[top] }),
    ...(right && { borderRightColor: BORDER_COLOUR_VALUE[right] }),
    ...(bottom && { borderBottomColor: BORDER_COLOUR_VALUE[bottom] }),
    ...(left && { borderLeftColor: BORDER_COLOUR_VALUE[left] }),
    ...(background && { backgroundColor: BACKGROUND_COLOUR_VALUE[background] })
  };
};
