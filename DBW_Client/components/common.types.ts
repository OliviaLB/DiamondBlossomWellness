// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type Component<P = {}> = P & {
  /**
   * Unique DOM id for the root element. Optional - when omitted,
   * `Box`` generate a stable one via `useId()`. Pass an
   * explicit value when you need a predictable id (e.g. a test hook).
   */
  id?: string;

  /**
   * Optional additional CSS class names applied to the root element.
   */
  className?: string;

  /**
   * Explicit ARIA role override, for a component reused in a context whose
   * own markup doesn't already imply the right one (e.g. a text input
   * doubling as a combobox's `role="combobox"` - see `Autocomplete`).
   */
  role?: string;

  /**
   * Allows arbitrary `data-*` attributes to be passed through
   * to the rendered HTML element (e.g. `data-testid`).
   */
  [key: `data-${string}`]: unknown;

  /**
   * Allows arbitrary `aria-*` attributes to be passed through to the
   * rendered HTML element - the same escape hatch as `data-*` above, for
   * ARIA relationships (`aria-expanded`, `aria-controls`,
   * `aria-activedescendant`, ...) a component's own typed props don't cover.
   */
  [key: `aria-${string}`]: unknown;
};
