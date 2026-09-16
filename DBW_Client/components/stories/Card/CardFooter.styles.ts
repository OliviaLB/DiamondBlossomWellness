import clsx from 'clsx';
import { PADDINGX } from '../../common.styles';
import type { CardFooterProps } from './CardFooter.types';

type CardFooterClassNameProps = Pick<CardFooterProps, 'paddingX'>;

/** A slim, fixed vertical padding regardless of `paddingX` - footers are action rows, not body copy, so they don't follow the configurable vertical scale. */
export const getCardFooterClassName = ({ paddingX = '4x' }: CardFooterClassNameProps): string =>
  clsx('flex items-center justify-end gap-2 border-t border-line-primary py-3', PADDINGX[paddingX]);
