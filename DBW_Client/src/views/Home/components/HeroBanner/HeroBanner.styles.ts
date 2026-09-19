import clsx from 'clsx';

export const SECTION_CLASSES = clsx('relative flex flex-col overflow-hidden', 'lg:flex-row lg:min-h-190');

export const TEXT_PANEL_CLASSES = clsx(
  'flex w-full flex-col items-center justify-center gap-6 text-left',
  'bg-linear-to-b from-surface-app to-surface-canvas px-6 py-16 sm:px-10',
  'lg:w-[40%] lg:px-8 lg:py-0'
);

export const IMAGE_PANEL_CLASSES = 'relative min-h-72 w-full overflow-hidden sm:min-h-96 lg:min-h-0 lg:w-[60%]';

export const IMAGE_CLASSES = 'absolute inset-0 h-full w-full object-cover object-[center_0%]';

/** Blends the seam between the text panel and the photo - a bottom fade while they're stacked (mobile), a left fade once they sit side by side (`lg:`). */
export const SEAM_MOBILE_CLASSES =
  'absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-surface-app via-surface-app to-transparent lg:hidden';

export const SEAM_DESKTOP_CLASSES =
  'absolute inset-y-0 left-0 hidden w-1/3 bg-linear-to-r from-surface-app to-transparent lg:block';

export const TAGLINE_CLASSES = 'font-heading text-2xl text-tertiary-400 italic';

export const BODY_CLASSES = 'max-w-md';

export const CTA_ROW_CLASSES = 'flex flex-wrap items-center gap-4 pt-2';

export const NOTE_CLASSES = 'font-body text-xs text-ink-muted';
