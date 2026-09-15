import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import { aliases } from '../aliases.ts';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      resolve: {
        alias: aliases
      }
    });
  }
};

export default config;
