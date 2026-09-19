import type { JsonLdObject } from '@utils/seo';

export interface JsonLdProps {
  /** One schema.org object, or several. */
  data: JsonLdObject | JsonLdObject[];
}
