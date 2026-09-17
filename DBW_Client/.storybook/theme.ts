import { create, themes } from 'storybook/theming';

/**
 * Shared theme objects used everywhere a theme is needed: the manager UI
 * (sidebar, toolbar) via storybook-dark-mode, and the addon-docs
 * DocsContainer via the ThemedDocsContainer in preview.tsx - each pulls its
 * theme from a different place, so both need the same objects passed in
 * explicitly rather than relying on one to imply the other.
 */
export const darkTheme = create({
  base: 'dark',
  brandTitle: 'Diamond Blossom Wellness',

  colorPrimary: '#8b6ec4', // --color-secondary-500
  colorSecondary: '#ac90d8', // --color-secondary-400

  appBg: '#080a1f', // --surface-app
  appContentBg: '#0f1233', // --surface-canvas
  appPreviewBg: '#080a1f', // --surface-app
  appBorderColor: '#9aa3dc', // --line-primary
  appBorderRadius: 8,

  textColor: '#f5f4fa', // --ink-primary
  textInverseColor: '#08090f', // --ink-contrast
  textMutedColor: '#7b7fa0', // --ink-muted

  barBg: '#12173c', // --surface-card
  barTextColor: '#b9bcd4', // --ink-secondary
  barHoverColor: '#e496bc', // --color-tertiary-400
  barSelectedColor: '#ac90d8', // --color-secondary-400

  inputBg: '#12173c', // --surface-card
  inputBorder: '#9aa3dc', // --line-primary
  inputTextColor: '#f5f4fa', // --ink-primary
  inputBorderRadius: 6
});

/**
 * The design system doesn't have a real light palette yet (no `.dark`
 * overrides exist in themeColours.css - the app is navy-branded regardless
 * of theme), so light mode just brands Storybook's own default light theme
 * rather than inventing colours the product doesn't have.
 */
export const lightTheme = create({
  ...themes.normal,
  brandTitle: 'Diamond Blossom Wellness'
});
