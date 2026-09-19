export interface BulletListProps {
  /**
   * How many columns the list spreads across from `sm:` up.
   * @default 1
   */
  columns?: 1 | 2;
  items: string[];
}
