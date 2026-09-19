import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { SITE } from '@constants/site';
import Seo from './Seo';

const STATIC_HEAD = [
  '<title>Static title</title>',
  '<meta name="description" content="Static description">',
  '<meta property="og:title" content="Static og title">',
  '<meta property="og:image" content="https://static.example/og.jpg">'
].join('');

const content = (selector: string) => document.head.querySelector(selector)?.getAttribute('content');

describe('Seo', () => {
  const originalUrl = SITE.url;

  beforeEach(() => {
    document.head.innerHTML = STATIC_HEAD;
    SITE.url = 'https://www.example.co.uk';
  });

  afterEach(() => {
    SITE.url = originalUrl;
  });

  it('sets the title and description', () => {
    render(<Seo title="Facials in Farnborough" description="Tailored facials." path="/services?treatment=facials" />);

    expect(document.title).toBe('Facials in Farnborough');
    expect(content('meta[name="description"]')).toBe('Tailored facials.');
  });

  it('updates the tags already in the head instead of adding second ones', () => {
    render(<Seo title="New title" description="New description" path="/" />);

    expect(document.head.querySelectorAll('title')).toHaveLength(1);
    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.head.querySelectorAll('meta[property="og:title"]')).toHaveLength(1);
    expect(content('meta[property="og:title"]')).toBe('New title');
  });

  it('points the canonical URL and og:url at the absolute address of the page', () => {
    render(<Seo title="T" description="D" path="/services?treatment=facials" />);

    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://www.example.co.uk/services?treatment=facials'
    );
    expect(content('meta[property="og:url"]')).toBe('https://www.example.co.uk/services?treatment=facials');
  });

  it('shares the site image, or a page-specific one, as an absolute URL', () => {
    const { rerender } = render(<Seo title="T" description="D" path="/" />);

    expect(content('meta[property="og:image"]')).toBe('https://www.example.co.uk/og-image.jpg');
    expect(content('meta[name="twitter:image"]')).toBe('https://www.example.co.uk/og-image.jpg');

    rerender(<Seo title="T" description="D" path="/" image="/treatments/facials.jpg" />);

    expect(content('meta[property="og:image"]')).toBe('https://www.example.co.uk/treatments/facials.jpg');
  });

  it('writes no canonical or URL-based tags when the site URL is unknown', () => {
    SITE.url = '';
    render(<Seo title="T" description="D" path="/" />);

    expect(document.head.querySelector('link[rel="canonical"]')).toBeNull();
    expect(content('meta[property="og:url"]')).toBeUndefined();
    expect(document.head.querySelector('meta[property="og:image"]')).toBeNull();
  });

  it('follows prop changes, as when moving between pages', () => {
    const { rerender } = render(<Seo title="First" description="One" path="/" />);

    rerender(<Seo title="Second" description="Two" path="/faq" />);

    expect(document.title).toBe('Second');
    expect(content('meta[name="description"]')).toBe('Two');
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://www.example.co.uk/faq'
    );
    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
  });

  it('only asks search engines to skip the page when noIndex is set', () => {
    const { rerender } = render(<Seo title="T" description="D" path="/" />);
    expect(document.head.querySelector('meta[name="robots"]')).toBeNull();

    rerender(<Seo title="T" description="D" path="/" noIndex />);
    expect(content('meta[name="robots"]')).toBe('noindex, nofollow');

    rerender(<Seo title="T" description="D" path="/" />);
    expect(document.head.querySelector('meta[name="robots"]')).toBeNull();
  });
});
