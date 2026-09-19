import type { KeyboardEvent } from 'react';
import { motion } from 'motion/react';
import { TAP_ANIMATION, TAP_TRANSITION } from '../Button/Button.styles';
import { getCardClassName } from './Card.styles';
import type { CardProps } from './Card.types';

const HOVER_LIFT = { y: -4 };

/**
 * Plain shell - background/border/radius/shadow, nothing else. Compose it
 * with `CardHeader`/`CardContent`/`CardFooter` as children (see each for
 * their own padding/typography defaults), or anything else - `Card` itself
 * imposes no padding or layout of its own.
 *
 * `interactive` makes the whole card clickable. It renders as
 * `role="button"` rather than a native `<button>`, so a `CardFooter` full
 * of its own action buttons stays valid, non-nested markup - keyboard
 * activation (`Enter`/`Space`) is wired up by hand to compensate. It lifts
 * on hover and presses on tap, reusing `Button`'s own `TAP_ANIMATION`/
 * `TAP_TRANSITION`, and gets the same animated `:focus-visible` ring as
 * `Button`/`IconButton`.
 */
const Card = ({
  background = 'card',
  border = 'primary',
  borderRadius = 'xl',
  children,
  className: classNameProp,
  'data-testid': dataTestId,
  fullWidth = false,
  id,
  interactive = false,
  marginX,
  marginY,
  onClick,
  shadow = 'none'
}: CardProps) => {
  const className = getCardClassName({
    background,
    border,
    borderRadius,
    className: classNameProp,
    fullWidth,
    interactive,
    marginX,
    marginY,
    shadow
  });

  if (!interactive) {
    return (
      <div id={id} data-testid={dataTestId} className={className}>
        {children}
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
      className={className}
      onClick={() => onClick?.()}
      onKeyDown={handleKeyDown}
      whileHover={HOVER_LIFT}
      whileTap={TAP_ANIMATION}
      transition={TAP_TRANSITION}
    >
      {children}
    </motion.div>
  );
};
export default Card;
