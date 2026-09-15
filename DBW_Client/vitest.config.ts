import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { aliases } from './aliases.ts';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [react()],
        test: {
          name: 'unit',
          globals: true,
          environment: 'jsdom',
          setupFiles: ['./tests/setup.ts', './tests/vitest.setup.tsx'],
          coverage: {
            provider: 'v8',
            reporter: ['text', 'html', 'lcov'],
            reportsDirectory: './coverage',
            include: ['src/**/*.{ts,tsx}'],
            exclude: [
              '**/*.d.ts',
              '**/*.gen.ts',
              '**/*.spec.ts',
              '**/*.test.ts',
              '**/node_modules/**',
              '**/*.interface.ts',
              '**/*.jpeg',
              '**/index.ts',
              '**/animations.ts',
              '**/constants.ts',
              '**/styles.ts',
              '**/types.ts',
              '**/queryClient.ts',
              '**/testData/**',
              '**/services/data/**',
              '**/colours.ts'
            ]
          }
        }
      },
      {
        extends: true,
        plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }]
          }
        }
      }
    ]
  }
});
