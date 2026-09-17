import clsx from 'clsx';
import type { NavLinkVariant } from './NavLink.types';

/**
 * `data-status="active"` is set automatically by Tanstack Router's `Link`
 * when `to` matches the current location - every state below reads it via
 * Tailwind's `data-[status=active]:` variant rather than tracking active
 * state by hand.
 */
const BASE_CLASSES =
  'group relative inline-flex items-center font-body text-ink-secondary outline-2 outline-offset-1 outline-transparent transition-colors duration-200 ease-out hover:text-ink-primary data-[status=active]:text-ink-primary focus-visible:outline-secondary-400 focus-visible:outline-offset-4';

const INLINE_CLASSES = 'py-1 text-sm tracking-wide uppercase';
const BLOCK_CLASSES = 'w-full rounded-lg px-4 py-3 text-base data-[status=active]:bg-surface-card-raised';

export const getNavLinkClassName = (variant: NavLinkVariant): string =>
  clsx(BASE_CLASSES, variant === 'inline' ? INLINE_CLASSES : BLOCK_CLASSES);

/** Underline that grows from the centre on hover, and stays fully drawn while the link's route is active - `inline` variant only. */
export const INLINE_UNDERLINE_CLASSES =
  'pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-secondary-400 transition-transform duration-300 ease-out group-hover:scale-x-100 group-data-[status=active]:scale-x-100';
