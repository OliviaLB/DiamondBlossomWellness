import clsx from 'clsx';
import { BORDERRADIUS, MARGINX, MARGINY } from '../../common.styles';
import { OUTLINED_TONE, TEXT_TONE } from '../Button/Button.styles';
import type { ButtonSize, ButtonTone, ButtonVariant } from '../Button/Button.types';
import type { IconButtonProps } from './IconButton.types';

/** Square footprint + icon font-size per `size`. */
export const ICON_SIZE_STYLE: Record<ButtonSize, string> = {
  xs: 'h-7 w-7 text-sm',
  sm: 'h-8 w-8 text-base',
  md: 'h-10 w-10 text-lg',
  lg: 'h-12 w-12 text-xl',
  xl: 'h-14 w-14 text-2xl'
};

/** Disabled state - identical across all three variants, and takes priority over `tone`. */
const DISABLED_CLASSES = 'cursor-not-allowed bg-accent-300 text-accent-600';

type IconButtonClassNameProps = Pick<IconButtonProps, 'borderRadius' | 'disabled' | 'marginX' | 'marginY' | 'size'>;

/** Resolves every class shared by all three `variant`s - footprint, radius, spacing, and the disabled override. Tone/variant-specific classes are layered on top by `IconButton.tsx`. */
export const getIconButtonClassName = ({
  borderRadius = 'full',
  disabled = false,
  marginX,
  marginY,
  size = 'md'
}: IconButtonClassNameProps): string =>
  clsx(
    'inline-flex items-center justify-center',
    'outline-2 outline-offset-1 outline-transparent transition-[outline-offset,outline-color] duration-200 ease-out',
    'focus-visible:outline-secondary-400 focus-visible:outline-offset-4',
    'disabled:pointer-events-none',
    ICON_SIZE_STYLE[size],
    BORDERRADIUS[borderRadius],
    marginX && MARGINX[marginX],
    marginY && MARGINY[marginY],
    disabled && DISABLED_CLASSES
  );

/** Tone/variant-specific classes layered on top of {@link getIconButtonClassName}, once `disabled` (handled there) is ruled out. Reuses `Button.styles`' own `OUTLINED_TONE`/`TEXT_TONE` maps so the two components can never drift apart on colour. */
export const getIconButtonToneClassName = (variant: ButtonVariant, tone: ButtonTone): string => {
  if (variant === 'outlined')
    return clsx('border-2 bg-transparent transition-colors duration-200', OUTLINED_TONE[tone]);
  if (variant === 'text') return clsx('bg-transparent', TEXT_TONE[tone]);
  return 'text-ink-primary';
};
