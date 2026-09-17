import clsx from 'clsx';
import type { DrawerSide } from './Drawer.types';

export const BACKDROP_CLASSES = 'fixed inset-0 z-[100] bg-overlay-dark';

export const getPanelClassName = (side: DrawerSide): string =>
  clsx(
    'fixed inset-y-0 z-[100] flex w-full max-w-xs flex-col overflow-y-auto bg-surface-card p-6 shadow-xl',
    side === 'right' ? 'right-0 border-l border-line-primary' : 'left-0 border-r border-line-primary'
  );

/** Off-screen `x` offset the panel animates from/to, per `side`. */
export const getPanelOffscreenX = (side: DrawerSide): string => (side === 'right' ? '100%' : '-100%');

export const CLOSE_BUTTON_WRAPPER_CLASSES = 'mb-4 flex justify-end';
