import type { ReactNode } from 'react';
import { BORDERRADIUS } from '../../common.styles';
import type { BackgroundColour, BorderColour, Spacing } from '../../common.styles';
import type { Shadow } from '../Box/Box.types';

export interface CardProps {
  /**
   * Background colour, drawn from the shared {@link BackgroundColour} scale.
   * @default 'card'
   */
  background?: BackgroundColour;
  /**
   * Border colour, drawn from the shared {@link BorderColour} scale.
   * @default 'primary'
   */
  border?: BorderColour;
  /**
   * Corner radius, drawn from the shared {@link BORDERRADIUS} scale.
   * @default 'xl'
   */
  borderRadius?: keyof typeof BORDERRADIUS;
  /**
   * Card contents - compose with `CardHeader`/`CardContent`/`CardFooter`
   * (each bringing its own padding), or anything else. `Card` itself
   * imposes no padding or layout of its own, so a plain `<img>` placed
   * first renders full-bleed, clipped to `borderRadius`.
   */
  children?: ReactNode;
  /** `data-testid` applied to the root element, for test/automation targeting. */
  'data-testid'?: string;
  /**
   * If `true`, the card takes up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  id?: string;
  /**
   * If `true`, the card is clickable - it lifts on hover and presses on
   * tap, and becomes keyboard-focusable/activatable (`Enter`/`Space`).
   * @default false
   */
  interactive?: boolean;
  /** Horizontal margin for the component. */
  marginX?: Spacing;
  /** Vertical margin for the component. */
  marginY?: Spacing;
  /** Called when the card is clicked or activated via keyboard. Only relevant when `interactive`. */
  onClick?: () => void;
  /**
   * Box-shadow size, Tailwind's built-in scale.
   * @default 'none'
   */
  shadow?: Shadow;
}
