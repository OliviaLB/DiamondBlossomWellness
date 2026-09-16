import type { KeyboardEvent } from 'react';
import { motion } from 'motion/react';
import { TAP_ANIMATION, TAP_TRANSITION } from '../Button/Button.styles';
import Typography from '../Typography/Typography';
import { getCardContentClassName, getCardFooterClassName, getCardShellClassName } from './Card.styles';
import type { CardProps } from './Card.types';

const HOVER_LIFT = { y: -4 };

/**
 * Content container - an optional full-bleed `media` slot at the top, a
 * padded body (`title`/`subtitle`/`children`), and an optional `footer` row
 * separated by a top divider.
 *
 * `interactive` makes the whole card clickable. It renders as
 * `role="button"` rather than a native `<button>`, so a `footer` full of
 * its own action buttons stays valid, non-nested markup - keyboard
 * activation (`Enter`/`Space`) is wired up by hand to compensate. It lifts
 * on hover and presses on tap, reusing `Button`'s own `TAP_ANIMATION`/
 * `TAP_TRANSITION`, and gets the same animated `:focus-visible` ring as
 * `Button`/`IconButton`.
 */
export const Card = ({
  background = 'card',
  border = 'default',
  borderRadius = 'xl',
  children,
  'data-testid': dataTestId,
  footer,
  fullWidth = false,
  id,
  interactive = false,
  marginX,
  marginY,
  media,
  onClick,
  paddingX = '4x',
  paddingY = '4x',
  shadow = 'none',
  subtitle,
  title
}: CardProps) => {
  const shellClassName = getCardShellClassName({
    background,
    border,
    borderRadius,
    fullWidth,
    interactive,
    marginX,
    marginY,
    shadow
  });

  const body = (
    <>
      {media}
      {(title || subtitle || children) && (
        <div className={getCardContentClassName({ paddingX, paddingY })}>
          {title && <Typography variant="h5">{title}</Typography>}
          {subtitle && (
            <Typography variant="subtitle2" colour="muted">
              {subtitle}
            </Typography>
          )}
          {children}
        </div>
      )}
      {footer && <div className={getCardFooterClassName({ paddingX })}>{footer}</div>}
    </>
  );

  if (!interactive) {
    return (
      <div id={id} data-testid={dataTestId} className={shellClassName}>
        {body}
      </div>
    );
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    onClick?.();
  };

  return (
    <motion.div
      id={id}
      data-testid={dataTestId}
      role="button"
      tabIndex={0}
      className={shellClassName}
      onClick={() => onClick?.()}
      onKeyDown={handleKeyDown}
      whileHover={HOVER_LIFT}
      whileTap={TAP_ANIMATION}
      transition={TAP_TRANSITION}
    >
      {body}
    </motion.div>
  );
};
