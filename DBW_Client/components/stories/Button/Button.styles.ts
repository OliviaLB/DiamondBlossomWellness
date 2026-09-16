import clsx from 'clsx';
import type { Transition } from 'motion/react';
import { BORDERRADIUS, MARGINX, MARGINY, PADDINGX, PADDINGY } from '../../common.styles';
import type { ButtonProps, ButtonSize, ButtonTone, ButtonVariant } from './Button.types';

/** Click/tap feedback shared by every variant of `Button`/`IconButton` - a quick, springy squash rather than a linear ease. */
export const TAP_ANIMATION = { scale: 0.94 };
export const TAP_TRANSITION: Transition = { type: 'spring', stiffness: 500, damping: 30 };

interface SizeStyle {
  paddingX: string;
  paddingY: string;
  text: string;
}

/** Padding + font-size per `size` - `paddingX`/`paddingY` on `ButtonProps` override just the padding half of this. */
export const SIZE_STYLE: Record<ButtonSize, SizeStyle> = {
  xs: { paddingX: 'px-2.5', paddingY: 'py-1', text: 'text-xs' },
  sm: { paddingX: 'px-3.5', paddingY: 'py-1.5', text: 'text-xs' },
  md: { paddingX: 'px-5', paddingY: 'py-2.5', text: 'text-sm' },
  lg: { paddingX: 'px-6', paddingY: 'py-3', text: 'text-sm' },
  xl: { paddingX: 'px-8', paddingY: 'py-3.5', text: 'text-base' }
};

/**
 * `contained`'s base/hover background, as raw CSS colours rather than
 * Tailwind classes - the hover shade crossfades in via a Motion-driven
 * overlay (see `Button.tsx`), not a `hover:` pseudo-class.
 */
export const CONTAINED_TONE: Record<ButtonTone, { base: string; hover: string }> = {
  primary: { base: 'var(--color-primary-400)', hover: 'var(--color-primary-500)' },
  secondary: { base: 'var(--color-secondary-400)', hover: 'var(--color-secondary-500)' },
  tertiary: { base: 'var(--color-tertiary-500)', hover: 'var(--color-tertiary-600)' }
};

/** `outlined`: border/text colour plus its hover fill, per tone. */
export const OUTLINED_TONE: Record<ButtonTone, string> = {
  primary: 'border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-ink-primary',
  secondary: 'border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-ink-primary',
  tertiary: 'border-tertiary-500 text-tertiary-500 hover:bg-tertiary-500 hover:text-ink-primary'
};

/** `text`: label colour per tone. */
export const TEXT_TONE: Record<ButtonTone, string> = {
  primary: 'text-primary-400',
  secondary: 'text-secondary-400',
  tertiary: 'text-tertiary-500'
};

/** `text`: underline colour per tone - the same shade as `TEXT_TONE`, as a background instead of a text colour. */
export const TEXT_UNDERLINE_TONE: Record<ButtonTone, string> = {
  primary: 'bg-primary-400',
  secondary: 'bg-secondary-400',
  tertiary: 'bg-tertiary-500'
};

/** Disabled state - identical across all three variants (a plain filled chip, no border), and takes priority over `tone`. */
const DISABLED_CLASSES = 'cursor-not-allowed bg-accent-300 text-accent-600';

type ButtonClassNameProps = Pick<
  ButtonProps,
  'borderRadius' | 'disabled' | 'fullWidth' | 'marginX' | 'marginY' | 'paddingX' | 'paddingY' | 'size'
>;

/** Resolves every class shared by all three `variant`s - size, spacing, radius, and the disabled override. Tone/variant-specific classes are layered on top by `Button.tsx`. */
export const getButtonClassName = ({
  borderRadius = 'md',
  disabled = false,
  fullWidth = false,
  marginX,
  marginY,
  paddingX,
  paddingY,
  size = 'md'
}: ButtonClassNameProps): string => {
  const sizeStyle = SIZE_STYLE[size];

  return clsx(
    'inline-flex items-center justify-center gap-2 font-body font-medium tracking-wide uppercase',
    'outline-2 outline-offset-1 outline-transparent transition-[outline-offset,outline-color] duration-200 ease-out',
    'focus-visible:outline-secondary-400 focus-visible:outline-offset-4',
    'disabled:pointer-events-none',
    paddingX ? PADDINGX[paddingX] : sizeStyle.paddingX,
    paddingY ? PADDINGY[paddingY] : sizeStyle.paddingY,
    sizeStyle.text,
    BORDERRADIUS[borderRadius],
    marginX && MARGINX[marginX],
    marginY && MARGINY[marginY],
    fullWidth && 'w-full',
    disabled && DISABLED_CLASSES
  );
};

/** Tone/variant-specific classes layered on top of {@link getButtonClassName}, once `disabled` (handled there) is ruled out. */
export const getButtonToneClassName = (variant: ButtonVariant, tone: ButtonTone): string => {
  if (variant === 'outlined')
    return clsx('border-2 bg-transparent transition-colors duration-200', OUTLINED_TONE[tone]);
  if (variant === 'text') return clsx('group bg-transparent', TEXT_TONE[tone]);
  return 'text-ink-primary';
};
