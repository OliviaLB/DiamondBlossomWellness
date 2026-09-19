import clsx from 'clsx';
import type { Transition } from 'motion/react';

/** A left-hand list of services beside the selected service's panel. `minmax(0, 1fr)` stops the (horizontally scrolling, on mobile) tab strip from stretching the page. */
export const SHOWCASE_CLASSES =
  'grid w-full max-w-7xl grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]';

/** Horizontal, scrollable strip on mobile; a sticky vertical list beside the panel from `lg:`. */
export const TABLIST_CLASSES = clsx(
  'flex min-w-0 gap-2 overflow-x-auto pb-2',
  'lg:sticky lg:top-28 lg:flex-col lg:self-start lg:overflow-visible lg:pb-0'
);

const TAB_BASE_CLASSES = clsx(
  'relative flex-none rounded-lg border px-5 py-4 text-left font-heading text-sm tracking-[0.15em] whitespace-nowrap uppercase',
  'transition-colors duration-200 lg:w-full lg:whitespace-normal',
  'outline-2 outline-offset-2 outline-transparent focus-visible:outline-secondary-400'
);

export const getTabClassName = (isActive: boolean): string =>
  clsx(
    TAB_BASE_CLASSES,
    isActive
      ? 'border-line-secondary text-ink-primary'
      : 'border-line-primary/30 bg-surface-card text-ink-secondary hover:text-ink-primary'
  );

/** Slides between tabs (shared `layoutId`) rather than each tab fading its own fill. */
export const TAB_INDICATOR_CLASSES = 'absolute inset-0 rounded-lg bg-secondary-700/50';

export const TAB_LABEL_CLASSES = 'relative';

export const PANEL_CLASSES = 'flex min-w-0 flex-col gap-4';

export const IMAGE_BLOCK_CLASSES =
  'relative h-56 w-full overflow-hidden rounded-2xl border border-line-primary/40 sm:h-64 lg:h-72';

export const IMAGE_CLASSES = 'absolute inset-0 h-full w-full object-cover object-center';

/** Settles the photo's lower edge into the page, echoing the seam-blending used on the hero and treatment cards. */
export const IMAGE_FADE_CLASSES =
  'pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-surface-app/60 to-transparent';

export const ABOUT_BLOCK_CLASSES =
  'flex flex-col gap-4 rounded-2xl border border-line-primary/40 bg-surface-card p-6 sm:p-8';

export const HIGHLIGHTS_CLASSES = 'mt-2 grid gap-x-6 gap-y-2 sm:grid-cols-2';

export const HIGHLIGHT_ITEM_CLASSES = 'flex items-baseline gap-3 font-body text-sm text-ink-secondary';

export const HIGHLIGHT_MARKER_CLASSES = 'text-xs text-secondary-400';

/** Panel swap - a short fade and lift; `AnimatePresence mode="wait"` runs the exit before the next panel enters. */
export const PANEL_INITIAL = { opacity: 0, y: 12 };
export const PANEL_ANIMATE = { opacity: 1, y: 0 };
export const PANEL_EXIT = { opacity: 0, y: -8 };
export const PANEL_TRANSITION: Transition = { duration: 0.25, ease: 'easeOut' };

/** No-bounce spring so the highlight glides to the newly selected tab. */
export const INDICATOR_TRANSITION: Transition = { type: 'spring', stiffness: 400, damping: 40 };
