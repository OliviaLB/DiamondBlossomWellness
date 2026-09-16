import { fileURLToPath } from 'node:url';

const resolveSrc = (folder: string) => fileURLToPath(new URL(`./src/${folder}`, import.meta.url));

export const aliases: Record<string, string> = {
  '@components': resolveSrc('components'),
  '@constants': resolveSrc('constants'),
  '@hooks': resolveSrc('hooks'),
  '@routes': resolveSrc('routes'),
  '@services': resolveSrc('services'),
  '@utils': resolveSrc('utils'),
  '@views': resolveSrc('views')
};
