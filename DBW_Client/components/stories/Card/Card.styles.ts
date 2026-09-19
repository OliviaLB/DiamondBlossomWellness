import clsx from 'clsx';
import { BACKGROUNDCOLOURS, BORDERCOLOURS, BORDERRADIUS, MARGINX, MARGINY } from '../../common.styles';
import { SHADOW } from '../Box/Box.styles';
import type { CardProps } from './Card.types';

/** The animated `:focus-visible` ring shared with `Button`/`IconButton` - see their own styles for why it animates `outline-offset`/`outline-color` rather than `transform`. */
const INTERACTIVE_CLASSES =
  'cursor-pointer text-left outline-2 outline-offset-1 outline-transparent transition-[outline-offset,outline-color,box-shadow] duration-200 ease-out hover:shadow-lg focus-visible:outline-secondary-400 focus-visible:outline-offset-4';

type CardClassNameProps = Pick<
  CardProps,
  | 'background'
  | 'border'
  | 'borderRadius'
  | 'className'
  | 'fullWidth'
  | 'interactive'
  | 'marginX'
  | 'marginY'
  | 'shadow'
>;

/** Shell - background/border/radius/shadow, plus the `interactive` affordances (cursor, hover shadow, focus ring). `className` (caller overrides) is appended last. */
export const getCardClassName = ({
  background = 'card',
  border = 'primary',
  borderRadius = 'xl',
  className,
  fullWidth = false,
  interactive = false,
  marginX,
  marginY,
  shadow = 'none'
}: CardClassNameProps): string =>
  clsx(
    'overflow-hidden border',
    BACKGROUNDCOLOURS[background],
    BORDERCOLOURS[border],
    BORDERRADIUS[borderRadius],
    SHADOW[shadow],
    marginX && MARGINX[marginX],
    marginY && MARGINY[marginY],
    fullWidth && 'w-full',
    interactive && INTERACTIVE_CLASSES,
    className
  );
