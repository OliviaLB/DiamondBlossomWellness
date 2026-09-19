import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { BUSINESS_NAME, PRIMARY_AREA, SERVICE_AREAS } from '@constants/business';
import { PAGES } from '@constants/pages';
import { TREATMENTS } from '@constants/services';
import { SITE } from '@constants/site';
import { absoluteUrl, buildBusinessSchema, buildServiceSchema, getTreatmentPath, getTreatmentSeo } from './seo';

const original = { ...SITE };

beforeEach(() => {
  SITE.url = 'https://www.example.co.uk';
});

afterEach(() => {
  Object.assign(SITE, original);
});

describe('absoluteUrl', () => {
  it('prefixes the site URL', () => {
    expect(absoluteUrl('/services')).toBe('https://www.example.co.uk/services');
  });

  it('is undefined when no site URL is configured', () => {
    SITE.url = '';

    expect(absoluteUrl('/services')).toBeUndefined();
  });
});

describe('getTreatmentSeo', () => {
  it('gives each treatment its own address, title and description', () => {
    const facials = TREATMENTS.find(({ id }) => id === 'facials')!;

    expect(getTreatmentSeo(facials)).toEqual({
      path: '/services?treatment=facials',
      title: `Facials in ${PRIMARY_AREA} | ${BUSINESS_NAME}`,
      description: facials.seoDescription
    });
    expect(getTreatmentPath('facials')).toBe('/services?treatment=facials');
  });
});

describe('search metadata', () => {
  const entries = [...Object.values(PAGES), ...TREATMENTS.map(getTreatmentSeo)];

  it('keeps titles and descriptions inside the lengths search results show', () => {
    entries.forEach(({ description, title }) => {
      expect(title.length, title).toBeLessThanOrEqual(65);
      expect(description.length, description).toBeLessThanOrEqual(160);
    });
  });

  it('never repeats a title, description or address', () => {
    (['title', 'description', 'path'] as const).forEach((key) => {
      const values = entries.map((entry) => entry[key]);

      expect(new Set(values).size, key).toBe(values.length);
    });
  });

  it('names each target town in the home and services descriptions', () => {
    [PAGES.home, PAGES.services].forEach(({ description }) => {
      SERVICE_AREAS.forEach((area) => expect(description).toContain(area));
    });
  });
});

describe('buildBusinessSchema', () => {
  it('describes a day spa serving every target town and the region', () => {
    const schema = buildBusinessSchema();

    expect(schema['@type']).toBe('DaySpa');
    expect(schema.name).toBe(BUSINESS_NAME);
    expect(schema.url).toBe('https://www.example.co.uk');
    expect(schema['@id']).toBe('https://www.example.co.uk/#business');
    expect(schema.image).toBe('https://www.example.co.uk/og-image.jpg');
    expect(schema.areaServed).toEqual([
      ...SERVICE_AREAS.map((name) => ({ '@type': 'City', name })),
      { '@type': 'AdministrativeArea', name: 'Hampshire' }
    ]);
  });

  it('lists every treatment, without prices', () => {
    const catalog = buildBusinessSchema().hasOfferCatalog as { itemListElement: Array<Record<string, unknown>> };

    expect(catalog.itemListElement).toHaveLength(TREATMENTS.length);
    expect(JSON.stringify(catalog)).not.toContain('price');
  });

  it('leaves out everything that has not been filled in', () => {
    const schema = buildBusinessSchema();

    ['telephone', 'email', 'address', 'geo', 'sameAs'].forEach((key) => expect(schema).not.toHaveProperty(key));
  });

  it('includes contact details once they are set', () => {
    Object.assign(SITE, {
      telephone: '+44 1252 000000',
      email: 'hello@example.co.uk',
      address: {
        streetAddress: '1 High Street',
        addressLocality: 'Farnborough',
        addressRegion: 'Hampshire',
        postalCode: 'GU14 0AA'
      },
      geo: { latitude: 51.29, longitude: -0.75 },
      sameAs: ['https://www.instagram.com/example']
    });

    const schema = buildBusinessSchema();

    expect(schema.telephone).toBe('+44 1252 000000');
    expect(schema.email).toBe('hello@example.co.uk');
    expect(schema.address).toMatchObject({ '@type': 'PostalAddress', postalCode: 'GU14 0AA', addressCountry: 'GB' });
    expect(schema.geo).toEqual({ '@type': 'GeoCoordinates', latitude: 51.29, longitude: -0.75 });
    expect(schema.sameAs).toEqual(['https://www.instagram.com/example']);
  });

  it('omits URLs entirely when the site URL is unknown', () => {
    SITE.url = '';
    const schema = buildBusinessSchema();

    ['url', '@id', 'image'].forEach((key) => expect(schema).not.toHaveProperty(key));
  });
});

describe('buildServiceSchema', () => {
  it('describes the treatment as provided by the business for the target towns', () => {
    const treatment = TREATMENTS[0];
    const schema = buildServiceSchema(treatment);

    expect(schema['@type']).toBe('Service');
    expect(schema.name).toBe(treatment.title);
    expect(schema.description).toBe(treatment.seoDescription);
    expect(schema.url).toBe(`https://www.example.co.uk/services?treatment=${treatment.id}`);
    expect(schema.image).toBe(`https://www.example.co.uk/${treatment.imageName}`);
    expect(schema.provider).toEqual({
      '@type': 'DaySpa',
      name: BUSINESS_NAME,
      '@id': 'https://www.example.co.uk/#business'
    });
    expect(schema.areaServed).toHaveLength(SERVICE_AREAS.length + 1);
  });

  it('omits URLs when the site URL is unknown', () => {
    SITE.url = '';
    const schema = buildServiceSchema(TREATMENTS[0]);

    expect(schema).not.toHaveProperty('url');
    expect(schema).not.toHaveProperty('image');
    expect(schema.provider).toEqual({ '@type': 'DaySpa', name: BUSINESS_NAME });
  });
});
