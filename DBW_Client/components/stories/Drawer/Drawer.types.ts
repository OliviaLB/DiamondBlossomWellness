import type { ReactNode } from 'react';

export type DrawerSide = 'left' | 'right';

export interface DrawerProps {
  /** Accessible name for the drawer, exposed via `aria-label` on the dialog. */
  'aria-label': string;
  children?: ReactNode;
  /** `data-testid` applied to the panel element, for test/automation targeting. */
  'data-testid'?: string;
  id?: string;
  /** Called when the backdrop is clicked, Escape is pressed, or the built-in close button is clicked. */
  onClose: () => void;
  /** If `true`, the drawer is open and rendered. */
  open: boolean;
  /**
   * Edge the panel slides in from.
   * @default 'right'
   */
  side?: DrawerSide;
}
