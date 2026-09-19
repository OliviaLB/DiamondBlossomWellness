import type { ReactNode } from 'react';

export interface AboutSectionProps {
  children: ReactNode;
  /** The section's heading - also its accessible name. */
  heading: string;
}
