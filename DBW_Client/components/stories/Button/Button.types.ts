import type { MouseEventHandler, ReactNode } from 'react';
import { BORDERRADIUS, Spacing } from '../../common.styles';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonTone = 'primary' | 'secondary' | 'tertiary';
export type ButtonVariant = 'contained' | 'outlined' | 'text';

export interface ButtonProps {
  /**
   * Corner radius, drawn from the shared {@link BORDERRADIUS} scale.
   * @default 'md'
   */
  borderRadius?: keyof typeof BORDERRADIUS;
  /** `data-testid` applied to the root element, for test/automation targeting. */
  'data-testid'?: string;
  /**
   * If `true`, the button is disabled - it always renders with an
   * `accent-300` background and `accent-600` text, regardless of `variant`/
   * `tone`, and drops its hover animation.
   * @default false
   */
  disabled?: boolean;
  /** Element placed after the label. */
  endIcon?: ReactNode;
  /**
   * If `true`, the button takes up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  id?: string;
  /** Button contents. */
  label?: string;
  /** Horizontal margin for the component. */
  marginX?: Spacing;
  /** Vertical margin for the component. */
  marginY?: Spacing;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
  /**
   * Button size.
   * @default 'md'
   */
  size?: ButtonSize;
  /** Element placed before the label. */
  startIcon?: ReactNode;
  /**
   * Colour tone applied to the button.
   * @default 'primary'
   */
  tone?: ButtonTone;
  /**
   * Button style variant - see {@link ButtonVariant}.
   * @default 'contained'
   */
  variant?: ButtonVariant;
}
