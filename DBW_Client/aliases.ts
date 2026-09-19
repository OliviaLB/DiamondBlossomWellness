import { fileURLToPath } from 'node:url';

const resolveRoot = (folder: string) => fileURLToPath(new URL(`./${folder}`, import.meta.url));
const resolveSrc = (folder: string) => resolveRoot(`src/${folder}`);

/** Keep in step with `paths` in tsconfig.app.json. */
export const aliases: Record<string, string> = {
  /** The design-system library: `@components/Button`, or every component from `@components`. */
  '@components': resolveRoot('components/stories'),
  /** App-specific components that aren't design-system primitives (`Seo`, `JsonLd`, ...). */
  '@appComponents': resolveSrc('components'),
  '@constants': resolveSrc('constants'),
  '@hooks': resolveSrc('hooks'),
  '@routes': resolveSrc('routes'),
  '@services': resolveSrc('services'),
  '@utils': resolveSrc('utils'),
  '@views': resolveSrc('views')
};
