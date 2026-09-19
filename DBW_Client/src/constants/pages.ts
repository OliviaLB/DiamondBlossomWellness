import { BUSINESS_NAME, FOUNDER_NAME, PRIMARY_AREA, SERVICE_AREAS_TEXT } from './business';

export interface PageSeo {
  /** Path from the site root, with any query string. */
  path: string;
  title: string;
  description: string;
}

/*
 * Per-page search metadata. Titles stay under ~60 characters and descriptions under ~160 so they
 * aren't truncated in results. Env-free - the build's SEO plugin imports this in plain Node.
 */
export const PAGES = {
  home: {
    path: '/',
    title: `Head Spa & Massage in ${PRIMARY_AREA} | ${BUSINESS_NAME}`,
    description: `Japanese head spa, facials and massage for ${SERVICE_AREAS_TEXT}. A calm, premium wellness studio - book your consultation today.`
  },
  services: {
    path: '/services',
    title: `Treatments & Prices in ${PRIMARY_AREA} | ${BUSINESS_NAME}`,
    description: `Japanese head spa, Hydrotherm 3D, facials and massage, with prices and package deals, for ${SERVICE_AREAS_TEXT}.`
  },
  aboutUs: {
    path: '/about-us',
    title: `About ${FOUNDER_NAME} | ${BUSINESS_NAME}, ${PRIMARY_AREA}`,
    description: `Meet ${FOUNDER_NAME}, founder of ${BUSINESS_NAME}: a premium spa with a Pilates background, serving ${SERVICE_AREAS_TEXT}.`
  },
  faq: {
    path: '/faq',
    title: `FAQ | ${BUSINESS_NAME}, ${PRIMARY_AREA}`,
    description: `Answers on bookings, preparation and aftercare for head spa, facial and massage treatments at ${BUSINESS_NAME}.`
  },
  contactUs: {
    path: '/contact-us',
    title: `Book a Treatment | ${BUSINESS_NAME}, ${PRIMARY_AREA}`,
    description: `Book a head spa, facial or massage consultation with ${BUSINESS_NAME}, serving ${SERVICE_AREAS_TEXT}. Open Tuesday to Saturday.`
  }
} as const satisfies Record<string, PageSeo>;
