type MetaAttribute = 'name' | 'property';

/** Sets a `<meta>`'s content, reusing the tag already in `<head>` (from `index.html`, or an earlier page) rather than adding a second one; `undefined` removes it. */
export const setMeta = (attribute: MetaAttribute, key: string, content: string | undefined) => {
  const existing = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (content === undefined) {
    existing?.remove();
    return;
  }

  const element = existing ?? document.head.appendChild(document.createElement('meta'));
  element.setAttribute(attribute, key);
  element.setAttribute('content', content);
};

/** Sets the canonical `<link>`, reusing an existing one; `undefined` removes it. */
export const setCanonical = (href: string | undefined) => {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (href === undefined) {
    existing?.remove();
    return;
  }

  const element = existing ?? document.head.appendChild(document.createElement('link'));
  element.setAttribute('rel', 'canonical');
  element.setAttribute('href', href);
};
