import clsx from 'clsx';
import { PADDINGX, PADDINGY } from '../../common.styles';
import type { CardHeaderProps } from './CardHeader.types';

type CardHeaderClassNameProps = Pick<CardHeaderProps, 'paddingX' | 'paddingY'>;

export const getCardHeaderClassName = ({ paddingX = '4x', paddingY = '2x' }: CardHeaderClassNameProps): string =>
  clsx('flex flex-col gap-1', PADDINGX[paddingX], PADDINGY[paddingY]);
