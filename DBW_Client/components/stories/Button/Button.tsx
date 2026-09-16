import clsx from 'clsx';
import { motion } from 'motion/react';
import { CONTAINED_TONE, getButtonClassName, getButtonToneClassName, TEXT_UNDERLINE_TONE } from './Button.styles';
import type { ButtonProps } from './Button.types';

/**
 * Design-system button. Three `variant`s, each recoloured by `tone`
 * (`primary`/`secondary`/`tertiary`):
 *
 * - `contained` (default): solid tone background; on hover a darker shade
 *   crossfades in over the base shade via Motion.
 * - `outlined`: border + label in the tone's base shade; on hover the
 *   background fills with that same shade and the label flips to
 *   `ink-primary` for contrast.
 * - `text`: label only, in the tone's base shade; on hover an underline
 *   grows out from the centre, under the label.
 *
 * `disabled` overrides every variant with the same `accent-300` background /
 * `accent-600` text and drops all hover behaviour.
 */
export const Button = ({
  borderRadius = 'md',
  'data-testid': dataTestId,
  disabled = false,
  endIcon,
  fullWidth = false,
  id,
  label,
  marginX,
  marginY,
  onClick,
  paddingX,
  paddingY,
  size = 'md',
  startIcon,
  tone = 'primary',
  variant = 'contained'
}: ButtonProps) => {
  const rootClassName = clsx(
    getButtonClassName({ borderRadius, disabled, fullWidth, marginX, marginY, paddingX, paddingY, size }),
    !disabled && getButtonToneClassName(variant, tone),
    variant === 'contained' && 'relative overflow-hidden',
    variant === 'text' && 'relative'
  );

  if (variant === 'contained') {
    return (
      <motion.button
        id={id}
        type="button"
        data-testid={dataTestId}
        className={rootClassName}
        style={{ backgroundColor: disabled ? undefined : CONTAINED_TONE[tone].base }}
        disabled={disabled}
        onClick={onClick}
        initial="rest"
        whileHover={disabled ? undefined : 'hover'}
      >
        {!disabled && (
          <motion.span
            aria-hidden
            className="absolute inset-0"
            style={{ backgroundColor: CONTAINED_TONE[tone].hover }}
            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />
        )}
        <span className="relative z-10 inline-flex items-center gap-2">
          {startIcon}
          {label}
          {endIcon}
        </span>
      </motion.button>
    );
  }

  return (
    <button
      id={id}
      type="button"
      data-testid={dataTestId}
      className={rootClassName}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="relative inline-flex items-center gap-2">
        {startIcon}
        {label}
        {endIcon}
        {variant === 'text' && !disabled && (
          <span
            aria-hidden
            className={clsx(
              'absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100',
              TEXT_UNDERLINE_TONE[tone]
            )}
          />
        )}
      </span>
    </button>
  );
};
