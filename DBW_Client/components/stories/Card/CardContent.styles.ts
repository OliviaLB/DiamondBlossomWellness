import clsx from 'clsx';
import { PADDINGX, PADDINGY } from '../../common.styles';
import type { CardContentProps } from './CardContent.types';

type CardContentClassNameProps = Pick<CardContentProps, 'paddingX' | 'paddingY'>;

export const getCardContentClassName = ({ paddingX = '4x', paddingY = '2x' }: CardContentClassNameProps): string =>
  clsx('font-body text-sm text-ink-secondary', PADDINGX[paddingX], PADDINGY[paddingY]);
