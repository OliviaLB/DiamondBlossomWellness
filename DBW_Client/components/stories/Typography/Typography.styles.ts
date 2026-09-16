import type { ElementType } from 'react';
import type { TextAlign, TypographyVariant } from './Typography.types';

/** Default element rendered for each `variant`, overridable via `as`. */
export const VARIANT_TAG: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'p',
  subtitle2: 'p',
  body1: 'p',
  body2: 'p',
  label: 'span',
  button: 'span'
};

/**
 * Font-size/weight/line-height per variant. Headings use an explicit
 * `text-[…]` size for both the small-screen (base) and `lg:` (Tailwind's
 * stock ≥1024px breakpoint) size, rather than Tailwind's stock text scale,
 * so the two can be tuned independently - `h1` is exactly 4× the 1rem base
 * at `lg:` and 2.56× on small screens, bold at both.
 *
 * `button` sets no `text-*` size at all, unlike every other variant - it's
 * meant to sit inside a component (`Button`) that already controls its own
 * font-size (e.g. via a `size` prop), so it inherits that ambient size
 * rather than fighting it.
 */
export const VARIANT_CLASSES: Record<TypographyVariant, string> = {
  h1: 'text-[2.56rem] lg:text-[3.5rem] font-bold leading-tight tracking-tight',
  h2: 'text-[2rem] lg:text-[3rem] font-bold leading-tight tracking-tight',
  h3: 'text-[1.625rem] lg:text-[2.25rem] font-semibold leading-tight',
  h4: 'text-[1.375rem] lg:text-[1.75rem] font-semibold leading-snug',
  h5: 'text-[1.25rem] lg:text-[1.5rem] font-semibold leading-snug',
  h6: 'text-[1.125rem] lg:text-[1.25rem] font-semibold leading-snug',
  subtitle1: 'text-base font-medium leading-normal',
  subtitle2: 'text-sm font-medium leading-normal',
  body1: 'text-base font-normal leading-relaxed',
  body2: 'text-sm font-normal leading-relaxed',
  label: 'text-sm font-medium leading-none',
  button: 'font-medium leading-none tracking-normal'
};

/**
 * Font family per variant, drawn from the three stacks in `themeColours.css`
 * (`--font-display`/`--font-heading`/`--font-body`, exposed as Tailwind's
 * `font-display`/`font-heading`/`font-body`): `h1`-`h6` set in Playfair
 * Display (the brand's primary serif), `subtitle*` in Cormorant Garamond
 * (a lighter complementary serif for taglines/sub-headings), and
 * `body*`/`label`/`button` in Poppins - the complementary sans-serif used
 * for anything read at length or inside an interactive control.
 */
export const VARIANT_FONT: Record<TypographyVariant, string> = {
  h1: 'font-display',
  h2: 'font-display',
  h3: 'font-display',
  h4: 'font-display',
  h5: 'font-display',
  h6: 'font-display',
  subtitle1: 'font-heading',
  subtitle2: 'font-heading',
  body1: 'font-body',
  body2: 'font-body',
  label: 'font-body',
  button: 'font-body'
};

export const TEXT_ALIGN: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify'
};
