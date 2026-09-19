import { describe, expect, it } from 'vitest';
import { TREATMENTS } from '../../src/constants/services.ts';
import { PAGES } from '../../src/constants/pages.ts';
import { buildHeadTags, buildRobots, buildSitemap, getSitePaths, normaliseSiteUrl, setHtmlTitle } from './seoPlugin.ts';

const attrsOf = (siteUrl?: string) => buildHeadTags(siteUrl).map(({ attrs }) => attrs as Record<string, string>);

const tagContent = (siteUrl: string | undefined, key: 'name' | 'property', value: string) =>
  attrsOf(siteUrl).find((attrs) => attrs[key] === value)?.content;

describe('getSitePaths', () => {
  it('lists every page, and every treatment at its own address', () => {
    const paths = getSitePaths();

    expect(paths).toEqual(expect.arrayContaining(Object.values(PAGES).map(({ path }) => path)));
    TREATMENTS.forEach(({ id }) => expect(paths).toContain(`/services?treatment=${id}`));
    expect(new Set(paths).size).toBe(paths.length);
  });
});

describe('normaliseSiteUrl', () => {
  it('trims whitespace and trailing slashes', () => {
    expect(normaliseSiteUrl(' https://www.example.co.uk/// ')).toBe('https://www.example.co.uk');
  });

  it('treats unset and blank as unknown', () => {
    expect(normaliseSiteUrl(undefined)).toBeUndefined();
    expect(normaliseSiteUrl('   ')).toBeUndefined();
  });
});

describe('buildSitemap', () => {
  const xml = buildSitemap('https://www.example.co.uk', ['/', '/services?treatment=facials&x=1']);

  it('is a sitemap with an absolute <loc> per path', () => {
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(xml).toContain('<loc>https://www.example.co.uk/</loc>');
  });

  it('escapes characters that are special in XML', () => {
    expect(xml).toContain('<loc>https://www.example.co.uk/services?treatment=facials&amp;x=1</loc>');
  });
});

describe('buildRobots', () => {
  it('allows crawling and names the sitemap when the site URL is known', () => {
    expect(buildRobots('https://www.example.co.uk')).toBe(
      'User-agent: *\nAllow: /\n\nSitemap: https://www.example.co.uk/sitemap.xml\n'
    );
  });

  it('still allows crawling, but names no sitemap, when it is not', () => {
    expect(buildRobots()).toBe('User-agent: *\nAllow: /\n');
  });
});

describe('buildHeadTags', () => {
  it('sets the home page description, theme colour and social defaults', () => {
    expect(tagContent(undefined, 'name', 'description')).toBe(PAGES.home.description);
    expect(tagContent(undefined, 'name', 'theme-color')).toBe('#080a1f');
    expect(tagContent(undefined, 'property', 'og:title')).toBe(PAGES.home.title);
    expect(tagContent(undefined, 'property', 'og:locale')).toBe('en_GB');
    expect(tagContent(undefined, 'name', 'twitter:card')).toBe('summary_large_image');
  });

  it('adds absolute image URLs only when the site URL is known', () => {
    expect(tagContent('https://www.example.co.uk', 'property', 'og:image')).toBe(
      'https://www.example.co.uk/og-image.jpg'
    );
    expect(tagContent('https://www.example.co.uk', 'name', 'twitter:image')).toBe(
      'https://www.example.co.uk/og-image.jpg'
    );
    expect(tagContent(undefined, 'property', 'og:image')).toBeUndefined();
    expect(tagContent(undefined, 'name', 'twitter:image')).toBeUndefined();
  });

  it('never bakes in og:url, which would name the home page as every page’s address', () => {
    expect(tagContent('https://www.example.co.uk', 'property', 'og:url')).toBeUndefined();
  });
});

describe('setHtmlTitle', () => {
  it('replaces the title, escaping anything special', () => {
    expect(setHtmlTitle('<head><title>Old</title></head>', 'Head Spa & Facials')).toBe(
      '<head><title>Head Spa &amp; Facials</title></head>'
    );
  });
});
