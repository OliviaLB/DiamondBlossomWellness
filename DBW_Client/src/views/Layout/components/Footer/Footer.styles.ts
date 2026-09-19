import clsx from 'clsx';

export const FOOTER_CLASSES = clsx(
  'mt-auto border-t border-line-primary/30 bg-surface-sunken',
  'px-6 pt-16 pb-8 sm:px-10 lg:px-16'
);

export const INNER_CLASSES = 'mx-auto flex w-full max-w-6xl flex-col gap-12';

export const GRID_CLASSES = 'grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr] lg:gap-12';

export const BRAND_CLASSES = 'flex max-w-sm flex-col gap-4 sm:col-span-2 lg:col-span-1';

export const BRAND_LINK_CLASSES = clsx(
  'w-fit font-display text-2xl font-semibold tracking-wide text-ink-primary',
  'outline-2 outline-offset-4 outline-transparent transition-colors duration-200 focus-visible:outline-secondary-400'
);

export const LIST_CLASSES = 'flex flex-col gap-3';

export const LINK_CLASSES = clsx(
  'w-fit font-body text-sm text-ink-secondary',
  'outline-2 outline-offset-4 outline-transparent transition-colors duration-200 ease-out',
  'hover:text-ink-primary focus-visible:outline-secondary-400 data-[status=active]:text-ink-primary'
);

export const DETAIL_CLASSES = 'flex items-start gap-3 font-body text-sm text-ink-secondary';

export const DETAIL_ICON_CLASSES = 'mt-0.5 w-4 text-secondary-400';

export const BOOK_BUTTON_WRAPPER_CLASSES = 'pt-2';

export const BOTTOM_BAR_CLASSES = clsx(
  'flex flex-col gap-2 border-t border-line-primary/20 pt-6',
  'sm:flex-row sm:items-center sm:justify-between'
);
