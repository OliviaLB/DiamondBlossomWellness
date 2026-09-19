import clsx from 'clsx';
import type { BulletListProps } from './BulletList.types';

export const getListClassName = (columns: BulletListProps['columns'] = 1): string =>
  clsx('grid gap-x-6 gap-y-3', columns === 2 && 'sm:grid-cols-2');

export const ITEM_CLASSES = 'flex items-baseline gap-3 font-body text-base text-ink-secondary';

export const MARKER_CLASSES = 'text-base text-secondary-400';
