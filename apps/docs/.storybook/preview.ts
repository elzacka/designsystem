import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import '@designsystem/tokens/css';
import '../src/styles.css';

const preview: Preview = {
  initialGlobals: {
    backgrounds: { value: undefined },
  },
  parameters: {
    options: {
      storySort: {
        order: ['Om designsystemet', '*'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobil',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Nettbrett',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1280px', height: '800px' },
        },
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true },
          { id: 'button-name', enabled: true },
        ],
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        Lys: '',
        Mørk: 'dark',
      },
      defaultTheme: 'Lys',
    }),
  ],
};

export default preview;
