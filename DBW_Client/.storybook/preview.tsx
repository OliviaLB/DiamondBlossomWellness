import type { ComponentProps } from 'react';
import type { Preview } from '@storybook/react-vite';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { darkTheme, lightTheme } from './theme';
import '../src/index.css';

/**
 * addon-docs renders the Docs page (headings, description, args table) with
 * its own theme, independent of the manager theme storybook-dark-mode sets -
 * so it needs to follow the same toggle and pick a theme itself.
 */
function ThemedDocsContainer(props: ComponentProps<typeof DocsContainer>) {
  const isDark = useDarkMode();
  return <DocsContainer {...props} theme={isDark ? darkTheme : lightTheme} />;
}

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    docs: { container: ThemedDocsContainer },
    // storybook-dark-mode's sun/moon toolbar toggle. `stylePreview` applies
    // `darkClass`/`lightClass` to the preview iframe's `<html>` directly -
    // the same class `useDarkMode` (components/theme/useDarkMode.ts) will
    // toggle in the real app, so `dark:` utilities render identically here.
    darkMode: {
      current: 'dark',
      dark: darkTheme,
      light: lightTheme,
      classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true
    }
  }
};

export default preview;
