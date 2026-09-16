import clsx from 'clsx';
import { motion } from 'motion/react';
import { CONTAINED_TONE } from '../Button/Button.styles';
import { getIconButtonClassName, getIconButtonToneClassName } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.types';

/**
 * Icon-only companion to `Button`, sharing its `tone`/`variant` colour
 * system (`Button.styles`' `CONTAINED_TONE`/`OUTLINED_TONE`/`TEXT_TONE`) so
 * the two can never drift apart:
 *
 * - `contained` (default): solid tone background; on hover a darker shade
 *   crossfades in, same treatment as `Button`.
 * - `outlined`: border + icon in the tone's base shade; on hover the
 *   background fills with that same shade and the icon flips to
 *   `ink-primary` for contrast.
 * - `text`: icon only, in the tone's base shade; on hover a soft tinted
 *   circle crossfades in behind it - there's no label to underline.
 *
 * `disabled` overrides every variant with the same `accent-300` background /
 * `accent-600` icon colour and drops all hover behaviour.
 */
export const IconButton = ({
  'aria-label': ariaLabel,
  borderRadius = 'full',
  'data-testid': dataTestId,
  disabled = false,
  icon,
  id,
  marginX,
  marginY,
  onClick,
  size = 'md',
  tone = 'primary',
  variant = 'contained'
}: IconButtonProps) => {
  const rootClassName = clsx(
    getIconButtonClassName({ borderRadius, disabled, marginX, marginY, size }),
    !disabled && getIconButtonToneClassName(variant, tone),
    variant !== 'outlined' && 'relative overflow-hidden'
  );

  if (variant === 'outlined') {
    return (
      <button
        id={id}
        type="button"
        aria-label={ariaLabel}
        data-testid={dataTestId}
        className={rootClassName}
        disabled={disabled}
        onClick={onClick}
      >
        {icon}
      </button>
    );
  }

  const overlayColour = variant === 'text' ? CONTAINED_TONE[tone].base : CONTAINED_TONE[tone].hover;

  return (
    <motion.button
      id={id}
      type="button"
      aria-label={ariaLabel}
      data-testid={dataTestId}
      className={rootClassName}
      style={{ backgroundColor: disabled || variant === 'text' ? undefined : CONTAINED_TONE[tone].base }}
      disabled={disabled}
      onClick={onClick}
      initial="rest"
      whileHover={disabled ? undefined : 'hover'}
    >
      {!disabled && (
        <motion.span
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundColor: overlayColour }}
          variants={{ rest: { opacity: 0 }, hover: { opacity: variant === 'text' ? 0.15 : 1 } }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      )}
      <span className="relative z-10 inline-flex items-center justify-center">{icon}</span>
    </motion.button>
  );
};
