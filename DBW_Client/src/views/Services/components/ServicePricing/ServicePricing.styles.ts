export const SECTION_CLASSES =
  'flex flex-col gap-6 rounded-2xl border border-line-primary/40 bg-surface-canvas p-6 sm:p-8';

export const GROUP_CLASSES = 'flex flex-col gap-4';

/** Fits as many columns as the width allows (rather than fixed breakpoints), so a card never gets narrower than its minimum. Packages get a wider minimum - they carry a title, a badge, a description and a list. */
export const PRICE_GRID_CLASSES = 'grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4';

export const PACKAGE_GRID_CLASSES = 'grid grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] gap-4';

/** Cards fill their grid cell, and the body stretches, so each card's "Book now" footer lines up across a row whatever its copy length. */
export const CARD_CLASSES = 'flex h-full flex-col';

export const CARD_BODY_CLASSES = 'flex flex-1 flex-col justify-between';

export const PRICE_ROW_CLASSES = 'mt-4 flex items-baseline gap-2';

export const PRICE_CLASSES = 'font-display text-3xl font-semibold text-ink-primary';

export const STRUCK_PRICE_CLASSES = 'font-body text-sm text-ink-muted line-through';

export const PACKAGE_HEADER_CLASSES = 'mb-2 flex items-start justify-between gap-3';

export const INCLUDES_LIST_CLASSES = 'mt-4 flex flex-col gap-1.5';

export const INCLUDES_ITEM_CLASSES = 'flex items-baseline gap-2 font-body text-sm text-ink-secondary';

export const INCLUDES_MARKER_CLASSES = 'text-xs text-secondary-400';
