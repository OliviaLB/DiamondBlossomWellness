export interface SeoProps {
  /** Page description for the search result snippet (keep under ~160 characters). */
  description: string;
  /** Social-share image path relative to `public/`. Defaults to the site image. */
  image?: string;
  /** Keeps the page out of search results. */
  noIndex?: boolean;
  /** Path from the site root, with any query string - becomes the canonical URL. */
  path: string;
  /** Page title (keep under ~60 characters). */
  title: string;
}
