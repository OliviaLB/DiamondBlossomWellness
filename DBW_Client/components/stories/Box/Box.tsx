import { useId } from 'react';
import type { ElementType } from 'react';
import { getColourStyle, getLayoutClassName } from './Box.styles';
import type { BoxProps } from './Box.types';

/**
 * Polymorphic base primitive. Renders as `as` (default `'div'`) and
 * forwards `id` (auto-generated when omitted), `className`, and every
 * `data-*`/native prop it receives onto that element - the one place
 * the `Component` contract is actually implemented.
 *
 * Also accepts a small MUI `Box`-style layout shorthand
 * (`display`/`direction`/`align`/`justify`/`gap`/`fullWidth`/`fullScreen`),
 * spacing (`marginX`/`marginY`/`paddingX`/`paddingY`), design-token colour
 * (`border`/`borderTop`/`borderRight`/`borderBottom`/`borderLeft`/`background`/
 * `shadow`), corner radius (`borderRadius`/`radiusTopLeft`/`radiusTopRight`/
 * `radiusBottomRight`/`radiusBottomLeft`), and a generic, framework-agnostic
 * `animation` style (plain CSS `@keyframes`, merged into the root element's
 * inline `style`).
 */
const Box = <E extends ElementType = 'div'>({
  as,
  id,
  className,
  display,
  direction,
  align,
  justify,
  gap,
  fullWidth = false,
  fullScreen = false,
  marginX,
  marginY,
  paddingX,
  paddingY,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  background,
  shadow,
  borderRadius,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomRight,
  radiusBottomLeft,
  animation,
  style,
  ...rest
}: BoxProps<E>) => {
  const Tag = (as ?? 'div') as ElementType;
  const autoId = useId();

  const layoutProps = {
    display,
    direction,
    align,
    justify,
    gap,
    fullWidth,
    fullScreen,
    marginX,
    marginY,
    paddingX,
    paddingY,
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    background,
    shadow,
    borderRadius,
    radiusTopLeft,
    radiusTopRight,
    radiusBottomRight,
    radiusBottomLeft
  };

  return (
    <Tag
      id={id ?? autoId}
      className={getLayoutClassName(layoutProps, className)}
      style={{
        ...getColourStyle({ border, borderTop, borderRight, borderBottom, borderLeft, background }),
        ...animation,
        ...style
      }}
      {...rest}
    />
  );
};

export default Box;
