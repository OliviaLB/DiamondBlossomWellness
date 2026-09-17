export interface NavLinkItem {
  /** Link label text. */
  label: string;
  /** Destination route path. */
  to: string;
}

export interface NavbarProps {
  /** Name or wordmark rendered on the left, linking to `/`. */
  businessName: string;
  /** `data-testid` applied to the root `<nav>` element, for test/automation targeting. */
  'data-testid'?: string;
  id?: string;
  /** Nav links - rendered inline on desktop (`md:` and up) and inside the mobile drawer below that. */
  links: NavLinkItem[];
}
