import clsx from 'clsx';
import type { Transition, Variants } from 'motion/react';

export const SECTION_CLASSES = 'flex flex-col items-center gap-12 px-6 py-20 sm:px-10 lg:px-16';

export const HEADER_CLASSES = 'flex max-w-2xl flex-col items-center gap-4 text-center';

export const GRID_CLASSES = 'grid w-full max-w-6xl auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3';

/** `auto-rows-fr` (on the grid) makes every row - not just every card within a row - the height of the tallest card; the card fills its cell and its body stretches, so each card's "Learn more" footer sits at the same level. */
export const CARD_CLASSES = 'flex h-full flex-col';

export const CARD_BODY_CLASSES = 'flex flex-1 flex-col justify-between';

export const IMAGE_WRAPPER_CLASSES = 'relative aspect-4/3 w-full overflow-hidden';

export const IMAGE_CLASSES = 'absolute inset-0 h-full w-full object-cover';

/** Fades the bottom of the photo into the card's own `surface-card` fill - the same seam-blending the hero uses - so there's no hard edge between photo and text. */
export const IMAGE_FADE_CLASSES =
  'pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-surface-card via-surface-card/40 to-transparent';

/** Hover shell around each `Card` (which takes no `className`). `isolate` keeps the `-z-10` glow behind the card but above the page; the `hover` variant raises `zIndex` so the growing card sits over its neighbours. */
export const CARD_WRAPPER_CLASSES = 'relative isolate w-full';

/** Soft, blurred amethyst-to-blush halo that radiates past the card edge - the cool-lilac/white/rose of light through a cut stone. */
export const CARD_GLOW_CLASSES = clsx(
  'pointer-events-none absolute -inset-2 -z-10 rounded-2xl blur-2xl',
  'bg-linear-to-br from-secondary-400/50 via-accent-100/25 to-tertiary-400/40'
);

/** Hairline bevelled edge, drawn above the card so it isn't lost to the card's own border. */
export const CARD_EDGE_CLASSES =
  'pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-secondary-200/60';

/** A diagonal band of light that sweeps across the photo, like a facet catching the light. Its skew is set through Motion's `style` so it composes with the `x` variants. */
export const IMAGE_GLINT_CLASSES = clsx(
  'pointer-events-none absolute inset-y-0 left-0 w-1/3',
  'bg-linear-to-r from-transparent via-accent-100/30 to-transparent'
);

export const IMAGE_GLINT_STYLE = { skewX: -20 };

/** Grow - a stiff, critically damped spring (no bounce), so it starts moving the instant the pointer lands and settles in ~0.3s. A softer spring eases in from rest, which reads as a delay. */
export const CARD_GROW_TRANSITION: Transition = { type: 'spring', stiffness: 320, damping: 36 };

/** Promotes each layer to the compositor so scaling/fading is a GPU transform, rather than re-rasterising the card (and its full-resolution photo) every frame. */
export const CARD_WRAPPER_STYLE = { willChange: 'transform' };

export const CARD_GLOW_STYLE = { willChange: 'opacity' };

const FADE_TRANSITION: Transition = { duration: 0.5, ease: 'easeOut' };

/** Driven by `whileHover="hover"` on the wrapper - the children pick the label up through variant propagation. */
export const CARD_VARIANTS: Variants = {
  rest: { scale: 1, zIndex: 0 },
  hover: { scale: 1.03, zIndex: 10 }
};

export const GLOW_VARIANTS: Variants = {
  rest: { opacity: 0, transition: FADE_TRANSITION },
  hover: { opacity: 1, transition: FADE_TRANSITION }
};

/** Sweeps from just off the left edge (`-100%` of its own width) to fully past the right (`400%`). Snaps straight back on leave rather than sweeping in reverse. */
export const GLINT_VARIANTS: Variants = {
  rest: { x: '-100%', transition: { duration: 0 } },
  hover: { x: '400%', transition: { duration: 1, ease: 'easeInOut' } }
};
