import type { ReactNode } from 'react';
import type { Spacing } from '../../common.styles';

export interface CardFooterProps {
  /** Footer content - typically one or more `Button`s. */
  children?: ReactNode;
  /**
   * Horizontal padding - matches `CardHeader`/`CardContent`'s own default
   * so the three line up.
   * @default '4x'
   */
  paddingX?: Spacing;
}
