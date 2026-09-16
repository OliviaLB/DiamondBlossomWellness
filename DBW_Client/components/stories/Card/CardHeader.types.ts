import type { ReactNode } from 'react';
import type { Spacing } from '../../common.styles';

export interface CardHeaderProps {
  /**
   * Horizontal padding.
   * @default '4x'
   */
  paddingX?: Spacing;
  /**
   * Vertical padding - kept smaller than `CardContent`'s own default so
   * the two sit close together when used back to back.
   * @default '2x'
   */
  paddingY?: Spacing;
  /** Supporting text under `title`, rendered in a muted tone. */
  subtitle?: ReactNode;
  /** Header title, rendered as a heading. */
  title: ReactNode;
}
