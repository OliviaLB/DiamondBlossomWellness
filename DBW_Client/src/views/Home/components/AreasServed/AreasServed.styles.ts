import clsx from 'clsx';

export const SECTION_CLASSES = 'flex flex-col items-center gap-8 px-6 pb-20 sm:px-10 lg:px-8';

export const HEADER_CLASSES = 'flex max-w-4xl flex-col items-center gap-4 text-center';

export const LIST_CLASSES = 'flex flex-wrap items-center justify-center gap-3';

export const AREA_CLASSES = clsx(
  'inline-flex items-center gap-2 rounded-full border border-line-secondary bg-surface-card px-5 py-2',
  'font-heading text-sm tracking-[0.15em] text-ink-primary uppercase'
);

export const AREA_MARKER_CLASSES = 'text-lg text-secondary-400';
