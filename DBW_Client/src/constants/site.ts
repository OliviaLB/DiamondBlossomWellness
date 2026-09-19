import { BUSINESS_NAME, SOCIAL_IMAGE } from './business';

export interface SiteAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
}

export interface SiteConfig {
  name: string;
  /** The live site's origin with no trailing slash, e.g. `https://www.example.co.uk`. Empty when `VITE_APP_URL` isn't set. */
  url: string;
  /** Default social-share image, relative to `public/` (1200x630). */
  image: string;
  imageAlt: string;
  telephone?: string;
  email?: string;
  address?: SiteAddress;
  geo?: { latitude: number; longitude: number };
  /** Profile URLs (Instagram, Facebook, Google Business Profile, ...). */
  sameAs: string[];
}

/*
 * The site's public identity, used for canonical URLs, social previews and structured data.
 *
 * TODO before launch: set VITE_APP_URL for production (see .env.production), and fill in the
 * contact details below. Every optional field is left out of the structured data entirely until
 * it is set - nothing here is guessed.
 */
export const SITE: SiteConfig = {
  name: BUSINESS_NAME,
  url: (import.meta.env.VITE_APP_URL ?? '').trim().replace(/\/+$/, ''),
  image: SOCIAL_IMAGE.path,
  imageAlt: SOCIAL_IMAGE.alt,
  telephone: undefined,
  email: undefined,
  address: undefined,
  geo: undefined,
  sameAs: []
};
