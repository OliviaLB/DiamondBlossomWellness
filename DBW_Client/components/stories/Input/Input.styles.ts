import clsx from 'clsx';
import type { InputProps, InputSize } from './Input.types';

/** Vertical padding + font-size per `size` - horizontal padding is fixed (see {@link getInputClassName}), so icon insets don't need to vary per size too. */
export const INPUT_SIZE: Record<InputSize, string> = {
  sm: 'py-1.5 text-sm',
  md: 'py-2 text-sm',
  lg: 'py-2.5 text-base'
};

/**
 * `bg-surface-sunken` - the same "wells, insets" surface token used
 * elsewhere for recessed content - reads as a field carved into the page
 * rather than a card sitting on it. The animated `:focus-visible` ring is
 * the same convention as `Button`/`IconButton`/`Card`/`Chip`.
 */
const BASE_CLASSES =
  'w-full rounded-lg border bg-surface-sunken px-3.5 font-body text-ink-primary placeholder:text-ink-muted outline-2 outline-offset-1 outline-transparent transition-[outline-offset,outline-color,border-color] duration-200 ease-out focus-visible:outline-secondary-400 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

type InputClassNameProps = Pick<InputProps, 'endIcon' | 'errorMessage' | 'size' | 'startIcon'>;

/** Resolves the `<input>` element's own classes - size, surface, border (colour flips to `danger` when `errorMessage` is set), and left/right padding when `startIcon`/`endIcon` are given. */
export const getInputClassName = ({ endIcon, errorMessage, size = 'md', startIcon }: InputClassNameProps): string =>
  clsx(
    BASE_CLASSES,
    INPUT_SIZE[size],
    errorMessage ? 'border-danger-edge' : 'border-line',
    startIcon && 'pl-9',
    endIcon && 'pr-9'
  );

export const START_ICON_CLASSES = 'pointer-events-none absolute left-3 inline-flex items-center text-ink-muted';
export const END_ICON_CLASSES = 'pointer-events-none absolute right-3 inline-flex items-center text-ink-muted';
