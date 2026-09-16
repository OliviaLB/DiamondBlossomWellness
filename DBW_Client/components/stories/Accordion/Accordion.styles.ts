import clsx from 'clsx';
import { BORDERRADIUS } from '../../common.styles';
import type { AccordionProps } from './Accordion.types';

/** Outer frame - the divider between items comes from `divide-y` on this container, not a border on each item. */
export const getAccordionClassName = ({ borderRadius = 'lg' }: Pick<AccordionProps, 'borderRadius'>): string =>
  clsx('divide-y divide-line overflow-hidden border border-line bg-surface-card', BORDERRADIUS[borderRadius]);

export const TRIGGER_CLASSES =
  'flex w-full items-center justify-between gap-4 px-5 py-4 text-left disabled:cursor-not-allowed disabled:opacity-50';

export const PANEL_CONTENT_CLASSES = 'px-5 pb-4 font-body text-sm text-ink-secondary';
