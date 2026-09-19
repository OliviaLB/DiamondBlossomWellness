import type { HtmlTagDescriptor, Plugin } from 'vite';
import { BUSINESS_NAME, OG_LOCALE, SOCIAL_IMAGE } from '../../src/constants/business.ts';
import { PAGES } from '../../src/constants/pages.ts';
import { TREATMENTS } from '../../src/constants/services.ts';

/** Matches `--color-primary-900` (the app background), so mobile browser chrome blends with the page. */
const THEME_COLOUR = '#080a1f';

/** Every address worth indexing - the pages, and each treatment's own address on the services page. */
export const getSitePaths = (): string[] => [
  PAGES.home.path,
  PAGES.services.path,
  ...TREATMENTS.map(({ id }) => `${PAGES.services.path}?treatment=${id}`),
  PAGES.aboutUs.path,
  PAGES.faq.path,
  PAGES.contactUs.path
];

/** Trims whitespace and trailing slashes; an unset or blank value becomes `undefined`. */
export const normaliseSiteUrl = (raw: string | undefined): string | undefined =>
  raw?.trim().replace(/\/+$/, '') || undefined;

const XML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};

const escapeXml = (value: string): string => value.replace(/[&<>"']/g, (character) => XML_ESCAPES[character]);

export const buildSitemap = (siteUrl: string, paths: string[]): string =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map((path) => `  <url><loc>${escapeXml(`${siteUrl}${path}`)}</loc></url>`),
    '</urlset>',
    ''
  ].join('\n');

/** Allows everything, and points crawlers at the sitemap when the site's URL is known. */
export const buildRobots = (siteUrl?: string): string =>
  ['User-agent: *', 'Allow: /', ...(siteUrl ? ['', `Sitemap: ${siteUrl}/sitemap.xml`] : []), ''].join('\n');

const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({ tag: 'meta', attrs, injectTo: 'head' });

/**
 * Site-wide defaults for `<head>`, taken from the home page. Crawlers that don't run JavaScript
 * (link previews in messaging apps and social networks) only ever see these; the app's `Seo`
 * component then updates the same tags in place for each page.
 *
 * `og:url` and `<link rel="canonical">` are deliberately not set here: baked into the shared HTML
 * they would name the home page as the canonical address of every page.
 */
export const buildHeadTags = (siteUrl?: string): HtmlTagDescriptor[] => {
  const { description, title } = PAGES.home;
  const image = siteUrl ? `${siteUrl}${SOCIAL_IMAGE.path}` : undefined;

  return [
    meta({ name: 'description', content: description }),
    meta({ name: 'theme-color', content: THEME_COLOUR }),
    meta({ property: 'og:type', content: 'website' }),
    meta({ property: 'og:site_name', content: BUSINESS_NAME }),
    meta({ property: 'og:locale', content: OG_LOCALE }),
    meta({ property: 'og:title', content: title }),
    meta({ property: 'og:description', content: description }),
    meta({ name: 'twitter:card', content: 'summary_large_image' }),
    meta({ name: 'twitter:title', content: title }),
    meta({ name: 'twitter:description', content: description }),
    ...(image
      ? [
          meta({ property: 'og:image', content: image }),
          meta({ property: 'og:image:width', content: String(SOCIAL_IMAGE.width) }),
          meta({ property: 'og:image:height', content: String(SOCIAL_IMAGE.height) }),
          meta({ property: 'og:image:alt', content: SOCIAL_IMAGE.alt }),
          meta({ name: 'twitter:image', content: image })
        ]
      : [])
  ];
};

export const setHtmlTitle = (html: string, title: string): string =>
  html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeXml(title)}</title>`);

/**
 * Search-engine plumbing that depends on the site's public address (`VITE_APP_URL`): head defaults
 * in `index.html`, plus `robots.txt` and `sitemap.xml` in the build. With no address set nothing
 * absolute is emitted - a warning is logged instead - so a wrong or localhost URL never ships.
 */
export const seoPlugin = (): Plugin => {
  let siteUrl: string | undefined;

  return {
    name: 'dbw-seo',

    configResolved(config) {
      siteUrl = normaliseSiteUrl(config.env.VITE_APP_URL as string | undefined);
    },

    transformIndexHtml: {
      order: 'pre',
      handler: (html) => ({ html: setHtmlTitle(html, PAGES.home.title), tags: buildHeadTags(siteUrl) })
    },

    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        if (request.url === '/robots.txt') {
          response.setHeader('Content-Type', 'text/plain');
          response.end(buildRobots(siteUrl));
        } else if (request.url === '/sitemap.xml' && siteUrl) {
          response.setHeader('Content-Type', 'application/xml');
          response.end(buildSitemap(siteUrl, getSitePaths()));
        } else {
          next();
        }
      });
    },

    generateBundle() {
      if (!siteUrl) {
        this.warn(
          'VITE_APP_URL is not set: sitemap.xml was not generated, and canonical/social-image URLs are omitted. Set it to the live site origin (see .env.production).'
        );
      }

      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: buildRobots(siteUrl) });

      if (siteUrl) {
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: buildSitemap(siteUrl, getSitePaths()) });
      }
    }
  };
};
