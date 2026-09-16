import type { ReactNode } from 'react';
import { BackgroundColour, BORDERRADIUS, BorderColour, Spacing } from '../../common.styles';
import type { Shadow } from '../Box/Box.types';

export interface CardProps {
  /**
   * Background colour, drawn from the shared {@link BackgroundColour} scale.
   * @default 'card'
   */
  background?: BackgroundColour;
  /**
   * Border colour, drawn from the shared {@link BorderColour} scale.
   * @default 'default'
   */
  border?: BorderColour;
  /**
   * Corner radius, drawn from the shared {@link BORDERRADIUS} scale.
   * @default 'xl'
   */
  borderRadius?: keyof typeof BORDERRADIUS;
  /** Main card content, rendered beneath `title`/`subtitle`. */
  children?: ReactNode;
  /** `data-testid` applied to the root element, for test/automation targeting. */
  'data-testid'?: string;
  /** Rendered in its own row beneath the content, separated by a divider - typically action buttons. */
  footer?: ReactNode;
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
  /** Media rendered full-bleed at the top of the card, above the padded content - typically an `<img>`. */
  media?: ReactNode;
  /** Called when the card is clicked or activated via keyboard. Only relevant when `interactive`. */
  onClick?: () => void;
  /**
   * Horizontal padding for the content/footer area - not applied to `media`.
   * @default '4x'
   */
  paddingX?: Spacing;
  /**
   * Vertical padding for the content area - not applied to `media`.
   * @default '4x'
   */
  paddingY?: Spacing;
  /**
   * Box-shadow size, Tailwind's built-in scale.
   * @default 'none'
   */
  shadow?: Shadow;
  /** Supporting text under `title`, rendered in a muted tone. */
  subtitle?: ReactNode;
  /** Card title, rendered as a heading above `subtitle`/`children`. */
  title?: ReactNode;
}
