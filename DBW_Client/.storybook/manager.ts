import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

/**
 * Themes the Storybook chrome (sidebar, toolbar, docs page) to match the
 * app's navy palette - see themeColours.css. Unlike the "Theme" toolbar
 * toggle in preview.tsx (which only affects story content inside the
 * preview iframe), this controls the manager UI itself, which otherwise
 * stays on Storybook's default light theme regardless of that toggle.
 */
const theme = create({
  base: 'dark',
  brandTitle: 'Diamond Blossom Wellness',

  colorPrimary: '#8b6ec4', // --color-secondary-500
  colorSecondary: '#ac90d8', // --color-secondary-400

  appBg: '#080a1f', // --surface-app
  appContentBg: '#0f1233', // --surface-canvas
  appPreviewBg: '#080a1f', // --surface-app
  appBorderColor: 'rgba(199, 203, 218, 0.14)', // --line
  appBorderRadius: 8,

  textColor: '#f5f4fa', // --ink-primary
  textInverseColor: '#08090f', // --ink-contrast
  textMutedColor: '#7b7fa0', // --ink-muted

  barBg: '#12173c', // --surface-card
  barTextColor: '#b9bcd4', // --ink-secondary
  barHoverColor: '#e496bc', // --color-tertiary-400
  barSelectedColor: '#ac90d8', // --color-secondary-400

  inputBg: '#12173c', // --surface-card
  inputBorder: 'rgba(199, 203, 218, 0.14)', // --line
  inputTextColor: '#f5f4fa', // --ink-primary
  inputBorderRadius: 6
});

addons.setConfig({ theme });
