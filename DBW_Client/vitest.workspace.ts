import path from 'node:path';
import { defineWorkspace } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const configDir = path.resolve(__dirname, '.storybook');

export default defineWorkspace([
  './vitest.config.ts',
  {
    extends: './vitest.config.ts',
    plugins: [storybookTest({ configDir })],
    test: {
      name: 'storybook',
      environment: 'jsdom',
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
        instances: [{ browser: 'chromium' }]
      }
    }
  }
]);
