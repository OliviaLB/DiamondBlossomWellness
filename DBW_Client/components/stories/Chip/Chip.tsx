import type { KeyboardEvent } from 'react';
import { faXmark } from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'motion/react';
import { TAP_ANIMATION, TAP_TRANSITION } from '../Button/Button.styles';
import { getChipClassName, REMOVE_BUTTON_CLASSES } from './Chip.styles';
import type { ChipProps } from './Chip.types';

/**
 * Compact status/tag label - the same "subtle bg / edge border / ink text"
 * treatment `HomeView`'s own status badges already use for `success`/
 * `warning`/`danger`, extended with a soft translucent tint for
 * `primary`/`secondary`/`tertiary`/`neutral`.
 *
 * Plain by default (a `<span>`). `onClick` makes it clickable - like `Card`,
 * it renders as `role="button"` on a `div` rather than a native `<button>`,
 * so `onRemove`'s own dismiss button (a real, separately-clickable
 * `<button>`) never ends up nested inside another button. Reuses `Button`'s
 * `TAP_ANIMATION`/`TAP_TRANSITION` for its press feedback and the same
 * animated `:focus-visible` ring convention as `Button`/`IconButton`/`Card`.
 */
export const Chip = ({
  colour = 'neutral',
  'data-testid': dataTestId,
  disabled = false,
  icon,
  id,
  label,
  onClick,
  onRemove,
  size = 'md'
}: ChipProps) => {
  const className = getChipClassName({ colour, disabled, onClick, size });

  const content = (
    <>
      {icon}
      <span>{label}</span>
      {onRemove && (
        <button
          type="button"
          aria-label={`Remove ${label}`}
          disabled={disabled}
          className={REMOVE_BUTTON_CLASSES}
          onClick={(event) => {
            event.stopPropagation();
            onRemove();
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </>
  );

  if (!onClick) {
    return (
      <span id={id} data-testid={dataTestId} className={className}>
        {content}
      </span>
    );
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (disabled || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    onClick();
  };

  return (
    <motion.div
      id={id}
      data-testid={dataTestId}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      className={className}
      onClick={() => !disabled && onClick()}
      onKeyDown={handleKeyDown}
      whileTap={disabled ? undefined : TAP_ANIMATION}
      transition={TAP_TRANSITION}
    >
      {content}
    </motion.div>
  );
};
