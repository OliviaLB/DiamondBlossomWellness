import type { MouseEventHandler } from 'react';
import { BORDERRADIUS, Spacing } from '../../common.styles';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonTone = 'primary' | 'secondary' | 'tertiary' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type Variant = 'contained' | 'outlined' | 'text';
export type Size = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps {
  id?: string;
  /** `data-testid` applied to the root element, for test/automation targeting. */
  'data-testid'?: string;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;

  endIcon?: React.ReactNode;
  /** Button size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Button contents */
  label?: string;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Element placed before the children. Ignored while `status` is anything
   * other than `'idle'`, in favour of the status icon.
   */
  startIcon?: React.ReactNode;
  /** Horizontal margin for the component */
  marginX?: Spacing;
  /** Vertical margin for the component */
  marginY?: Spacing;
  /**
   * Horizontal padding for the component.
   * @default derived from `size`
   */
  paddingX?: Spacing;
  /**
   * Vertical padding for the component.
   * @default derived from `size`
   */
  paddingY?: Spacing;
  /** Border radius variant */
  borderRadius?: keyof typeof BORDERRADIUS;
  /** Button variant */
  variant?: Variant;
}
