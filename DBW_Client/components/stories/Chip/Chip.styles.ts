import clsx from 'clsx';
import type { ChipColour, ChipProps, ChipSize } from './Chip.types';

/**
 * `success`/`warning`/`danger` reuse the exact "subtle bg / edge border /
 * ink text" tokens `HomeView`'s own status badges already use.
 * `primary`/`secondary`/`tertiary` build the same shape of treatment from
 * the brand scale directly, since there's no ready-made subtle triad for
 * them - a translucent tint of the tone rather than a flat fill, so the
 * chip still reads as "soft" against the dark app background.
 */
export const CHIP_COLOUR: Record<ChipColour, string> = {
  neutral: 'border-line bg-surface-card text-ink-secondary',
  primary: 'border-primary-400/40 bg-primary-400/10 text-primary-400',
  secondary: 'border-secondary-400/40 bg-secondary-400/10 text-secondary-400',
  tertiary: 'border-tertiary-400/40 bg-tertiary-400/10 text-tertiary-400',
  success: 'border-success-edge bg-success-subtle text-success-ink',
  warning: 'border-warning-edge bg-warning-subtle text-warning-ink',
  danger: 'border-danger-edge bg-danger-subtle text-danger-ink'
};

export const CHIP_SIZE: Record<ChipSize, string> = {
  sm: 'gap-1 px-2 py-0.5 text-xs',
  md: 'gap-1.5 px-3 py-1 text-sm'
};

/** Same animated `:focus-visible` ring convention as `Button`/`IconButton`/`Card` - see their styles for why it animates `outline-offset`/`outline-color` rather than `transform`. */
const INTERACTIVE_CLASSES =
  'cursor-pointer outline-2 outline-offset-1 outline-transparent transition-[outline-offset,outline-color,filter] duration-200 ease-out hover:brightness-125 focus-visible:outline-secondary-400 focus-visible:outline-offset-4';

const DISABLED_CLASSES = 'cursor-not-allowed opacity-50';

type ChipClassNameProps = Pick<ChipProps, 'colour' | 'disabled' | 'onClick' | 'size'>;

/** Resolves every class shared by clickable and plain chips - colour, size, radius, plus the `onClick`/`disabled` affordances. */
export const getChipClassName = ({
  colour = 'neutral',
  disabled = false,
  onClick,
  size = 'md'
}: ChipClassNameProps): string =>
  clsx(
    'inline-flex items-center rounded-full border font-body font-medium',
    CHIP_COLOUR[colour],
    CHIP_SIZE[size],
    onClick && !disabled && INTERACTIVE_CLASSES,
    disabled && DISABLED_CLASSES
  );

/** The trailing `onRemove` dismiss button - a real `<button>`, separate from the chip's own `role="button"` div, so the two never end up nested. */
export const REMOVE_BUTTON_CLASSES =
  'ml-0.5 inline-flex shrink-0 items-center justify-center rounded-full text-current outline-2 outline-offset-1 outline-transparent transition-[outline-offset,outline-color,opacity] duration-200 ease-out hover:opacity-70 focus-visible:outline-secondary-400 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-40';
