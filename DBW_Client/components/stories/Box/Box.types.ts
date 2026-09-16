import type { ComponentPropsWithoutRef, CSSProperties, ElementType } from 'react';
import type { Component } from '../../common.types';
import type { BackgroundColour, BorderColour, Radius, Spacing } from '../../common.styles';

export type { BackgroundColour, BorderColour, Radius, Spacing } from '../../common.styles';

export type Display = 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none';
export type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
export type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export type Gap = 'none' | '1x' | '2x' | '3x' | '4x' | '5x';
export type Shadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface BoxLayoutProps {
  /** CSS `display` for the root element. */
  display?: Display;
  /**
   * `flex-direction` - only takes effect when `display` is `'flex'`/`'inline-flex'`.
   * @default 'row'
   */
  direction?: FlexDirection;
  /** `align-items` - takes effect when `display` is `'flex'`/`'inline-flex'`/`'grid'`/`'inline-grid'`. */
  align?: Align;
  /** `justify-content` - takes effect when `display` is `'flex'`/`'inline-flex'`/`'grid'`/`'inline-grid'`. */
  justify?: Justify;
  /** Gap between flex/grid children. */
  gap?: Gap;
  /**
   * If `true`, the element takes up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * If `true`, the element fills the viewport (`100vw` x `100vh`). Combine
   * with `display="flex"` and `align`/`justify` to centre content full-bleed.
   * @default false
   */
  fullScreen?: boolean;
  /** Horizontal margin. */
  marginX?: Spacing;
  /** Vertical margin. */
  marginY?: Spacing;
  /** Horizontal padding. */
  paddingX?: Spacing;
  /** Vertical padding. */
  paddingY?: Spacing;
  /**
   * Border colour, drawn from the border design tokens ({@link BorderColour}
   * - the `line` scale, status `edge` tones, or a brand colour). Applies a
   * 1px solid border on all four sides - override just one with
   * `borderTop`/`borderRight`/`borderBottom`/`borderLeft`.
   */
  border?: BorderColour;
  /** Top border colour override - falls back to `border` on the other three sides. */
  borderTop?: BorderColour;
  /** Right border colour override - falls back to `border` on the other three sides. */
  borderRight?: BorderColour;
  /** Bottom border colour override - falls back to `border` on the other three sides. */
  borderBottom?: BorderColour;
  /** Left border colour override - falls back to `border` on the other three sides. */
  borderLeft?: BorderColour;
  /**
   * Background colour, drawn from the background design tokens
   * ({@link BackgroundColour} - the `surface` scale, status `subtle` tones,
   * or a brand colour).
   */
  background?: BackgroundColour;
  /**
   * Box-shadow size, Tailwind's built-in scale.
   * @default 'none'
   */
  shadow?: Shadow;
  /** Uniform corner radius, on all four corners - override just one with `radiusTopLeft`/`radiusTopRight`/`radiusBottomRight`/`radiusBottomLeft`. */
  borderRadius?: Radius;
  /** Top-left corner radius override. */
  radiusTopLeft?: Radius;
  /** Top-right corner radius override. */
  radiusTopRight?: Radius;
  /** Bottom-right corner radius override. */
  radiusBottomRight?: Radius;
  /** Bottom-left corner radius override. */
  radiusBottomLeft?: Radius;
}

/** The subset of CSS animation properties {@link BoxProps.animation} accepts. */
export type AnimationStyle = Pick<
  CSSProperties,
  | 'animation'
  | 'animationName'
  | 'animationDuration'
  | 'animationTimingFunction'
  | 'animationDelay'
  | 'animationIterationCount'
  | 'animationDirection'
  | 'animationFillMode'
  | 'animationPlayState'
>;

/**
 * Props for the Box component: a polymorphic primitive that renders
 * as the tag given by `as` (defaulting to `'div'`) and guarantees
 * `id`, `className`, and any `data-*` attributes reach that element.
 *
 * Every design-system component that composes `Component`/
 * `ComponentWithChildren` should render its root element through `Box`
 * rather than re-destructuring those props by hand, so the contract those
 * types promise is actually honoured at runtime.
 */
export type BoxProps<E extends ElementType = 'div'> = Component<Omit<ComponentPropsWithoutRef<E>, 'id' | 'className'>> &
  BoxLayoutProps & {
    /**
     * Element or component to render as.
     * @default 'div'
     */
    as?: E;
    /**
     * Generic, framework-agnostic CSS animation properties (keyframe-based),
     * merged into the root element's inline `style` - a plain CSS
     * `@keyframes` animation, no Motion dependency.
     */
    animation?: AnimationStyle;
  };
