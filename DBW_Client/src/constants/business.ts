/*
 * Business identity and service area. Deliberately free of `import.meta.env` and any other
 * browser/Vite-only API, because the build's SEO plugin (tools/seo) imports it in plain Node.
 */

export const BUSINESS_NAME = 'Diamond Blossom Wellness';

export const FOUNDER_NAME = 'Lois';

/** Open Graph's form of the site's `en-GB` locale. */
export const OG_LOCALE = 'en_GB';

export const REGION = 'Hampshire';

/** Default social-share image (in `public/`), at the 1.91:1 size link previews expect. */
export const SOCIAL_IMAGE = {
  path: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: `${BUSINESS_NAME} - Japanese head spa, facials and massage`
} as const;

/** Towns the business targets, most important first - the first is used as the primary location in page titles. */
export const SERVICE_AREAS = ['Farnborough', 'Camberley', 'Aldershot'] as const;

export const PRIMARY_AREA = SERVICE_AREAS[0];

/** `Farnborough, Camberley and Aldershot` */
export const SERVICE_AREAS_TEXT = `${SERVICE_AREAS.slice(0, -1).join(', ')} and ${SERVICE_AREAS[SERVICE_AREAS.length - 1]}`;
