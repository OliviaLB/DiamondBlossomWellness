import clsx from 'clsx';

const NAV_BASE_CLASSES =
  'fixed inset-x-0 top-0 z-50 mx-auto flex h-20 max-w-[2000px] items-center justify-between gap-4 px-4 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out sm:px-8';

const NAV_TRANSPARENT_CLASSES = 'border-b border-transparent bg-transparent';

/** The "glassy" state - a frosted, translucent tint of `surface-app` once the page scrolls past the reveal threshold. */
const NAV_GLASSY_CLASSES =
  'border-b border-line-primary/30 bg-surface-app/70 shadow-lg shadow-black/20 backdrop-blur-md';

export const getNavClassName = (isScrolled: boolean): string =>
  clsx(NAV_BASE_CLASSES, isScrolled ? NAV_GLASSY_CLASSES : NAV_TRANSPARENT_CLASSES);

export const BRAND_CLASSES =
  'font-display text-xl font-semibold tracking-wide text-ink-primary outline-2 outline-offset-4 outline-transparent transition-colors duration-200 focus-visible:outline-secondary-400 sm:text-2xl';

export const DESKTOP_LINKS_CLASSES = 'hidden items-center gap-8 md:flex';

export const MENU_BUTTON_WRAPPER_CLASSES = 'md:hidden';

export const DRAWER_LINKS_CLASSES = 'mt-2 flex flex-col gap-1';
