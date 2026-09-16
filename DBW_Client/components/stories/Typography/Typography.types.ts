import type { ElementType } from 'react';
import type { BoxProps } from '../Box/Box.types';
import type { TextColour } from '../../common.styles';

export type { TextColour } from '../../common.styles';

export type TypographyVariant =
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'label' | 'button';

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

/**
 * Props for the Typography component: a `Box` specialised for text, so
 * every layout/spacing/token-colour/animation prop `Box` offers (see
 * {@link BoxProps}) - including `id`/`data-*`/`animation` from the shared
 * `Component` contract - still applies here unchanged.
 *
 * `variant` drives both the default element (`h1`-`h6` → `<h1>`-`<h6>`,
 * `subtitle*`/`body*`/`label`/`button` → `<p>`/`<span>`) and its typographic
 * styling. Override just the element with `as` while keeping the variant's
 * styling - e.g. an `h2`-styled heading rendered as a `<div>` for outline/
 * layout reasons.
 */
export type TypographyProps<E extends ElementType = 'p'> = Omit<BoxProps<E>, 'as'> & {
  /**
   * Typographic style + default element.
   * @default 'body1'
   */
  variant?: TypographyVariant;
  /** Element or component to render as, overriding `variant`'s default tag. */
  as?: E;
  /**
   * Text colour - see {@link TextColour}.
   * @default 'primary'
   */
  colour?: TextColour;
  /** Horizontal text alignment. */
  textAlign?: TextAlign;
  /**
   * If `true`, truncates overflowing text to a single line with an ellipsis
   * rather than wrapping.
   * @default false
   */
  noWrap?: boolean;
  /**
   * If `true`, adds bottom margin for spacing text blocks apart (a heading
   * followed by a paragraph, etc).
   * @default false
   */
  gutterBottom?: boolean;
};
