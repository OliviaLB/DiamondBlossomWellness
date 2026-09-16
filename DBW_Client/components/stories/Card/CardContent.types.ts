import type { ReactNode } from 'react';
import type { Spacing } from '../../common.styles';

export interface CardContentProps {
  /** Body content. */
  children?: ReactNode;
  /**
   * Horizontal padding.
   * @default '4x'
   */
  paddingX?: Spacing;
  /**
   * Vertical padding - kept smaller than a typical standalone default so
   * `CardHeader` + `CardContent` back to back don't double up on space.
   * @default '2x'
   */
  paddingY?: Spacing;
}
