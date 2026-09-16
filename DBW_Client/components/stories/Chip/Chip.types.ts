import type { ReactNode } from 'react';

export type ChipColour = 'neutral' | 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger';
export type ChipSize = 'sm' | 'md';

export interface ChipProps {
  /**
   * Colour - `success`/`warning`/`danger` match `HomeView`'s own existing
   * status badges; `primary`/`secondary`/`tertiary` are a softer, translucent
   * tint of the equivalent `Button` tone.
   * @default 'neutral'
   */
  colour?: ChipColour;
  /** `data-testid` applied to the root element, for test/automation targeting. */
  'data-testid'?: string;
  /**
   * If `true`, disables `onClick`/`onRemove` and dims the chip.
   * @default false
   */
  disabled?: boolean;
  /** Element placed before the label - an icon or a status dot. */
  icon?: ReactNode;
  id?: string;
  /** Chip label. */
  label: string;
  /** If provided, the chip becomes clickable. */
  onClick?: () => void;
  /** If provided, renders a trailing dismiss button that calls this instead of triggering `onClick`. */
  onRemove?: () => void;
  /**
   * Chip size.
   * @default 'md'
   */
  size?: ChipSize;
}
