import { useEffect } from 'react';
import { SITE } from '@constants/site';
import { absoluteUrl } from '@utils/seo';
import { setCanonical, setMeta } from './Seo.utils';
import type { SeoProps } from './Seo.types';

/**
 * Sets a page's title, description, canonical URL and social-share tags, and renders nothing.
 *
 * It edits the tags already in `index.html` in place rather than rendering `<title>`/`<meta>`
 * elements: React 19 would append a second `description`/`canonical`/`og:*` beside the static
 * ones (and leave the static `<title>` behind), which crawlers can read the wrong way round. The
 * static tags stay as the defaults for crawlers that don't run JavaScript, such as link previews.
 */
const Seo = ({ description, image = SITE.image, noIndex = false, path, title }: SeoProps) => {
  useEffect(() => {
    const canonical = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : undefined);
    setCanonical(canonical);

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', imageUrl);
    setMeta('property', 'og:image:alt', imageUrl && SITE.imageAlt);

    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl);
  }, [description, image, noIndex, path, title]);

  return null;
};

export default Seo;
