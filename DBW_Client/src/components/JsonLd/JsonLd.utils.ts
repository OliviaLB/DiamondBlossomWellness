import type { JsonLdObject } from '@utils/seo';

const BACKSLASH = String.fromCharCode(92);
const LESS_THAN = /</g;

/** Replaces `<` with the six characters backslash-u-0-0-3-c, which a JSON parser reads back as `<`. */
const ESCAPED_LESS_THAN = `${BACKSLASH}u003c`;

/** Serialises to JSON with every `<` escaped, so a value containing `</script>` can never close the script tag early. */
export const serialiseJsonLd = (data: JsonLdObject | JsonLdObject[]): string =>
  JSON.stringify(data).replace(LESS_THAN, ESCAPED_LESS_THAN);
