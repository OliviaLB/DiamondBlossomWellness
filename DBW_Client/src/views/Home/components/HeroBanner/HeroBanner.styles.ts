import clsx from 'clsx';

export const SECTION_CLASSES = clsx('relative flex flex-col overflow-hidden', 'lg:flex-row lg:min-h-190');

/** Flat `surface-app` fill - kept a single flat shade, rather than a gradient, so it matches `SEAM_DESKTOP_CLASSES`'s own `from-surface-app` stop exactly at every height and the seam between panel and photo stays invisible. */
export const TEXT_PANEL_CLASSES = clsx(
  'flex w-full flex-col items-center justify-center gap-6 text-left',
  'bg-surface-app px-6 py-16 sm:px-10',
  'lg:w-[40%] lg:px-8 lg:py-0'
);

export const IMAGE_PANEL_CLASSES = 'relative min-h-72 w-full overflow-hidden sm:min-h-96 lg:min-h-0 lg:w-[60%]';

export const IMAGE_CLASSES = 'absolute inset-0 h-full w-full object-cover object-[center_0%]';

/** Blends the seam between the text panel and the photo - a bottom fade while they're stacked (mobile), a wide, soft left fade once they sit side by side (`lg:`), so there's no hard vertical edge. */
export const SEAM_MOBILE_CLASSES =
  'absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-surface-app via-surface-app to-transparent lg:hidden';

export const SEAM_DESKTOP_CLASSES = clsx(
  'absolute inset-y-0 left-0 hidden w-3/5 lg:block',
  'bg-linear-to-r from-surface-app via-surface-app/60 via-35% to-transparent'
);

/** Scrim behind the fixed nav where it crosses the photo (top-of-page, before the nav's own scroll background kicks in) so the nav links stay legible. */
export const TOP_SCRIM_CLASSES =
  'pointer-events-none absolute inset-x-0 top-0 hidden h-[80px] bg-linear-to-b from-surface-app/70 to-surface-app/40 lg:block';

export const BODY_CLASSES = 'max-w-md';

export const CTA_ROW_CLASSES = 'flex flex-wrap items-center gap-4 pt-2';

export const NOTE_CLASSES = 'font-body text-xs text-ink-muted';
