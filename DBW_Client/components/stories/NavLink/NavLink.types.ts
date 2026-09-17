export type NavLinkVariant = 'inline' | 'block';

export interface NavLinkProps {
  /** `data-testid` applied to the root element, for test/automation targeting. */
  'data-testid'?: string;
  id?: string;
  /** Link label text. */
  label: string;
  /** Called on click, in addition to navigating - e.g. closing the mobile drawer the link was rendered inside. */
  onClick?: () => void;
  /** Destination route path. */
  to: string;
  /**
   * `inline` (default) is a compact horizontal text link with an animated
   * underline on hover/active, for the desktop nav bar. `block` is a
   * full-width row with a larger tap target, for the mobile drawer.
   * @default 'inline'
   */
  variant?: NavLinkVariant;
}
