import type { ReactNode } from 'react';

export type AlertSeverity = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps {
  /** Main message, beneath `title`. */
  children?: ReactNode;
  /** `data-testid` applied to the root element, for test/automation targeting. */
  'data-testid'?: string;
  /**
   * Overrides the `severity`'s default icon. Pass `null` to hide the icon
   * entirely rather than falling back to the default.
   */
  icon?: ReactNode | null;
  id?: string;
  /** Called when the dismiss button is clicked - the button only renders when this is set. */
  onClose?: () => void;
  /**
   * Drives colour and the default icon.
   * @default 'info'
   */
  severity?: AlertSeverity;
  /** Optional heading above `children`. */
  title?: ReactNode;
}
