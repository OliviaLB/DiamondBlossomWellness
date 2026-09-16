import type { ReactNode } from 'react';
import { BORDERRADIUS } from '../../common.styles';

export type AccordionMode = 'single' | 'multiple';

export interface AccordionItemData {
  /** Item body, revealed when the item is open. */
  content: ReactNode;
  /** If `true`, the item's trigger is disabled - it can't be opened or closed. */
  disabled?: boolean;
  /** Item header, rendered as the clickable trigger. */
  header: ReactNode;
  /** Stable identifier - tracks whether the item is open, and doubles as the `id` half of its trigger/panel `aria-*` wiring. */
  id: string;
}

export interface AccordionProps {
  /**
   * Corner radius applied to the accordion's outer border.
   * @default 'lg'
   */
  borderRadius?: keyof typeof BORDERRADIUS;
  /** `data-testid` applied to the root element, for test/automation targeting. */
  'data-testid'?: string;
  /** Initial open item id(s), for uncontrolled usage. Ignored once `openIds` is provided. */
  defaultOpenIds?: string[];
  id?: string;
  /** The items to render, top to bottom. */
  items: AccordionItemData[];
  /**
   * `single`: opening an item closes whichever other item was open.
   * `multiple`: items open/close independently of each other.
   * @default 'single'
   */
  mode?: AccordionMode;
  /** Called with the new set of open item ids whenever one is toggled. */
  onOpenIdsChange?: (openIds: string[]) => void;
  /** Open item id(s), for controlled usage - pair with `onOpenIdsChange`. */
  openIds?: string[];
}
