import type { MouseEventHandler, ReactNode } from 'react';
import { BORDERRADIUS } from '../../common.styles';
import type { Spacing } from '../../common.styles';
import type { ButtonSize, ButtonTone, ButtonVariant } from '../Button/Button.types';

export type { ButtonSize as IconButtonSize, ButtonTone as IconButtonTone, ButtonVariant as IconButtonVariant };

export interface IconButtonProps {
  /**
   * Accessible label - required, since the button renders no visible text.
   * Exposed as the native `aria-label`.
   */
  'aria-label': string;
  /**
   * Corner radius, drawn from the shared {@link BORDERRADIUS} scale.
   * @default 'full'
   */
  borderRadius?: keyof typeof BORDERRADIUS;
  /** `data-testid` applied to the root element, for test/automation targeting. */
  'data-testid'?: string;
  /**
   * If `true`, the button is disabled - it always renders with an
   * `accent-300` background and `accent-600` icon colour, regardless of
   * `variant`/`tone`, and drops its hover animation.
   * @default false
   */
  disabled?: boolean;
  /** The icon itself - an SVG or glyph, expected to size/colour via `currentColor`/`em` so it follows the button's own colour and `size`. */
  icon: ReactNode;
  id?: string;
  /** Horizontal margin for the component. */
  marginX?: Spacing;
  /** Vertical margin for the component. */
  marginY?: Spacing;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * Button size - drives both the square footprint and the icon's font-size.
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Colour tone applied to the button.
   * @default 'primary'
   */
  tone?: ButtonTone;
  /**
   * Button style variant, shared with {@link ButtonVariant} - `text` renders
   * as a ghost button with a soft tinted circle on hover, rather than
   * `Button`'s underline (there's no label to underline).
   * @default 'contained'
   */
  variant?: ButtonVariant;
}
