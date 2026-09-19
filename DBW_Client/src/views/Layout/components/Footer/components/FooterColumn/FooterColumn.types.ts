import type { ReactNode } from 'react';

export interface FooterColumnProps {
  children: ReactNode;
  /** Small-caps heading above the column's content. */
  title: string;
}
