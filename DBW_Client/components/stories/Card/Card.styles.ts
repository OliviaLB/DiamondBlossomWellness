import clsx from 'clsx';
import {
  BACKGROUNDCOLOURS,
  BORDERCOLOURS,
  BORDERRADIUS,
  MARGINX,
  MARGINY,
  PADDINGX,
  PADDINGY
} from '../../common.styles';
import { SHADOW } from '../Box/Box.styles';
import type { CardProps } from './Card.types';

/** The animated `:focus-visible` ring shared with `Button`/`IconButton` - see their own styles for why it animates `outline-offset`/`outline-color` rather than `transform`. */
const INTERACTIVE_CLASSES =
  'cursor-pointer text-left outline-2 outline-offset-1 outline-transparent transition-[outline-offset,outline-color,box-shadow] duration-200 ease-out hover:shadow-lg focus-visible:outline-secondary-400 focus-visible:outline-offset-4';

type CardShellClassNameProps = Pick<
  CardProps,
  'background' | 'border' | 'borderRadius' | 'fullWidth' | 'interactive' | 'marginX' | 'marginY' | 'shadow'
>;

/** Outer shell - background/border/radius/shadow, plus the `interactive` affordances (cursor, hover shadow, focus ring). */
export const getCardShellClassName = ({
  background = 'card',
  border = 'default',
  borderRadius = 'xl',
  fullWidth = false,
  interactive = false,
  marginX,
  marginY,
  shadow = 'none'
}: CardShellClassNameProps): string =>
  clsx(
    'overflow-hidden border',
    BACKGROUNDCOLOURS[background],
    BORDERCOLOURS[border],
    BORDERRADIUS[borderRadius],
    SHADOW[shadow],
    marginX && MARGINX[marginX],
    marginY && MARGINY[marginY],
    fullWidth && 'w-full',
    interactive && INTERACTIVE_CLASSES
  );

type CardContentClassNameProps = Pick<CardProps, 'paddingX' | 'paddingY'>;

/** Padded body - holds `title`/`subtitle`/`children`, not `media`. */
export const getCardContentClassName = ({ paddingX = '4x', paddingY = '4x' }: CardContentClassNameProps): string =>
  clsx('flex flex-col gap-2 font-body text-sm text-ink-secondary', PADDINGX[paddingX], PADDINGY[paddingY]);

type CardFooterClassNameProps = Pick<CardProps, 'paddingX'>;

/** Footer row - shares the content area's horizontal padding, separated from it by a top divider. */
export const getCardFooterClassName = ({ paddingX = '4x' }: CardFooterClassNameProps): string =>
  clsx('flex items-center justify-end gap-2 border-t border-line py-3', PADDINGX[paddingX]);
