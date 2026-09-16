import type { ComponentProps, ElementType } from 'react';
import clsx from 'clsx';
import { TEXT_ALIGN, VARIANT_CLASSES, VARIANT_FONT, VARIANT_TAG } from './Typography.styles';
import type { TypographyProps } from './Typography.types';
import { Box } from '../Box';
import { TEXTCOLOURS } from '../../common.styles';

// `Box` is itself polymorphic over its own `as`, and TS can't carry a second
// generic (Typography's `E`) through a component that already resolves its
// props from its own type parameter - so this one call is cast loosely.
// `TypographyProps<E>` above stays fully sound for callers; only this
// internal forwarding boundary opts out of the check.
const AnyBox = Box as (props: ComponentProps<'div'> & Record<string, unknown>) => ReturnType<typeof Box>;

/**
 * Text primitive built on {@link Box} - every layout/spacing/token-colour/
 * animation prop `Box` offers still applies here (see `BoxProps`), plus
 * `variant`, which drives both the default element (`h1`-`h6` →
 * `<h1>`-`<h6>`, `subtitle*`/`body*` → `<p>`) and the typographic styling
 * (size/weight/line-height/font family - see `VARIANT_FONT` in
 * `Typography.styles.ts`), loaded via the `@import` in `src/index.css`.
 *
 * Every heading shrinks on small screens and scales up past the `lg:`
 * breakpoint; `h1` is exactly 4× the 1rem base size at `lg:` and 2.56× on
 * small screens, bold at both.
 *
 * `colour` (default `'primary'`) picks the text colour from the shared
 * `TEXTCOLOURS` scale (see `common.styles.ts`) - neutral ink shades, link
 * tones, or a status tone (`success`/`warning`/`danger`, each with an
 * explicit `-dark` variant rather than an automatic dark-mode switch).
 *
 * Any text in the app should render as a child of `Typography` rather than
 * a bare `<p>`/`<span>`/etc, so font, size, weight and colour all stay
 * driven by this one component.
 */
const Typography = <E extends ElementType = 'p'>({
  variant = 'body1',
  as,
  colour = 'primary',
  textAlign,
  noWrap = false,
  gutterBottom = false,
  className,
  ...rest
}: TypographyProps<E>) => {
  const Tag = as ?? VARIANT_TAG[variant];

  return (
    <AnyBox
      as={Tag}
      className={clsx(
        VARIANT_FONT[variant],
        VARIANT_CLASSES[variant],
        TEXTCOLOURS[colour],
        textAlign && TEXT_ALIGN[textAlign],
        noWrap && 'truncate',
        gutterBottom && 'mb-4',
        className
      )}
      {...rest}
    />
  );
};

export default Typography;
