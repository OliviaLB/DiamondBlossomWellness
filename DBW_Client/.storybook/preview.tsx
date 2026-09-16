import { useEffect } from 'react';
import type { Preview } from '@storybook/react-vite';
import '../src/index.css';

/**
 * Toolbar toggle applying the same `dark` class on `<html>` that
 * `useDarkMode` (components/theme/useDarkMode.ts) uses in the real app -
 * so every `dark:` utility in the design system renders identically here
 * as it would there. Pick "Dark" from the "Theme" toolbar item to preview
 * any story in dark mode.
 */
const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    backgrounds: {
      // Hex values mirror --surface-app / --surface-canvas in themeColours.css.
      // Hardcoded rather than var(...) because the backgrounds toolbar renders
      // in the manager UI, which doesn't have access to the preview iframe's CSS.
      default: 'app',
      options: {
        app: { name: 'App', value: '#080a1f' },
        canvas: { name: 'Canvas', value: '#0f1233' }
      }
    }
  },
  globalTypes: {
    theme: {
      description: 'Colour scheme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' }
        ],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: 'dark'
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === 'dark';

      useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
      }, [isDark]);

      return <Story />;
    }
  ]
};

export default preview;
