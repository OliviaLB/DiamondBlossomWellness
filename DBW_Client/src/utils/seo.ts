import { BUSINESS_NAME, PRIMARY_AREA, REGION, SERVICE_AREAS } from '@constants/business';
import type { PageSeo } from '@constants/pages';
import { PAGES } from '@constants/pages';
import { TREATMENTS } from '@constants/services';
import type { Treatment } from '@constants/services';
import { SITE } from '@constants/site';

export type JsonLdObject = Record<string, unknown>;

/** `/services` -> `https://example.co.uk/services`. `undefined` when no site URL is configured, so callers leave the tag out rather than emit a wrong one. */
export const absoluteUrl = (path: string): string | undefined => (SITE.url ? `${SITE.url}${path}` : undefined);

/** Where a treatment lives on the services page - a distinct, indexable address for each. */
export const getTreatmentPath = (treatmentId: string): string => `${PAGES.services.path}?treatment=${treatmentId}`;

/** A treatment's own search result - its name plus the primary town, and the description written for it. */
export const getTreatmentSeo = (treatment: Treatment): PageSeo => ({
  path: getTreatmentPath(treatment.id),
  title: `${treatment.title} in ${PRIMARY_AREA} | ${BUSINESS_NAME}`,
  description: treatment.seoDescription
});

const AREA_SERVED: JsonLdObject[] = [
  ...SERVICE_AREAS.map((name) => ({ '@type': 'City', name })),
  { '@type': 'AdministrativeArea', name: REGION }
];

/** The business itself - `DaySpa` (a `HealthAndBeautyBusiness`) - with every service it offers and the towns it serves. Prices are left out until the menu is final. */
export const buildBusinessSchema = (): JsonLdObject => {
  const { address, email, geo, image, name, sameAs, telephone, url } = SITE;
  const imageUrl = absoluteUrl(image);

  return {
    '@context': 'https://schema.org',
    '@type': 'DaySpa',
    ...(url && { '@id': `${url}/#business`, url }),
    name,
    description: PAGES.home.description,
    ...(imageUrl && { image: imageUrl }),
    ...(telephone && { telephone }),
    ...(email && { email }),
    ...(address && { address: { '@type': 'PostalAddress', ...address, addressCountry: 'GB' } }),
    ...(geo && { geo: { '@type': 'GeoCoordinates', ...geo } }),
    ...(sameAs.length > 0 && { sameAs }),
    areaServed: AREA_SERVED,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Treatments',
      itemListElement: TREATMENTS.map(({ summary, title }) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: title, description: summary }
      }))
    }
  };
};

/** A single treatment, provided by the business, for the towns it serves. */
export const buildServiceSchema = (treatment: Treatment): JsonLdObject => {
  const { url } = SITE;
  const pageUrl = absoluteUrl(getTreatmentPath(treatment.id));
  const imageUrl = absoluteUrl(`/${treatment.imageName}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: treatment.title,
    serviceType: treatment.title,
    description: treatment.seoDescription,
    ...(pageUrl && { url: pageUrl }),
    ...(imageUrl && { image: imageUrl }),
    provider: { '@type': 'DaySpa', name: SITE.name, ...(url && { '@id': `${url}/#business` }) },
    areaServed: AREA_SERVED
  };
};
