import { serialiseJsonLd } from './JsonLd.utils';
import type { JsonLdProps } from './JsonLd.types';

/** Structured data for search engines - an inline `application/ld+json` script, which renders nothing visible. */
const JsonLd = ({ data }: JsonLdProps) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialiseJsonLd(data) }} />
);

export default JsonLd;
