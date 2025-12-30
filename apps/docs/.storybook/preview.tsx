import type { Preview, ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';
import { withThemeByClassName } from '@storybook/addon-themes';
import { useEffect } from 'react';

// Import design tokens directly from source for HMR
import '../../../packages/tokens/src/primitives.css';
import '../../../packages/tokens/src/themes/base.css';
import '../../../packages/tokens/src/themes/accents/teal.css';

// Import component styles
import '../../../packages/core/dist/index.css';

// Import Storybook-specific styles
import '../src/styles.css';

// Accent CSS content for dynamic switching
const accentStyles = {
  teal: `
    :root {
      --color-primary-50: #e6f2f5;
      --color-primary-100: #cce5eb;
      --color-primary-200: #99cbd7;
      --color-primary-300: #66b1c3;
      --color-primary-400: #3397af;
      --color-primary-500: #1a5f7a;
      --color-primary-600: #134a5f;
      --color-primary-700: #0f3a4a;
      --color-primary-800: #0b2a36;
      --color-primary-900: #071a21;
      --color-primary-950: #030d11;
      --color-accent: #1a5f7a;
      --color-accent-hover: #134a5f;
      --color-accent-foreground: #F4F1EA;
      --color-ring: #1a5f7a;
      --color-focus: #cce5eb;
    }
    .dark {
      --color-accent: #3397af;
      --color-accent-hover: #66b1c3;
      --color-accent-foreground: #1C1C1C;
      --color-ring: #3397af;
      --color-focus: #0b2a36;
    }
  `,
  forest: `
    :root {
      --color-primary-50: #eef5f0;
      --color-primary-100: #ddebe1;
      --color-primary-200: #bbd7c3;
      --color-primary-300: #99c3a5;
      --color-primary-400: #77af87;
      --color-primary-500: #4A7C59;
      --color-primary-600: #3b6347;
      --color-primary-700: #2c4a35;
      --color-primary-800: #1d3124;
      --color-primary-900: #0f1912;
      --color-primary-950: #070c09;
      --color-accent: #4A7C59;
      --color-accent-hover: #3b6347;
      --color-accent-foreground: #F4F1EA;
      --color-ring: #4A7C59;
      --color-focus: #ddebe1;
    }
    .dark {
      --color-accent: #77af87;
      --color-accent-hover: #99c3a5;
      --color-accent-foreground: #1C1C1C;
      --color-ring: #77af87;
      --color-focus: #1d3124;
    }
  `,
  earth: `
    :root {
      --color-primary-50: #f5f2ed;
      --color-primary-100: #ebe5db;
      --color-primary-200: #d7cbb7;
      --color-primary-300: #c3b193;
      --color-primary-400: #af976f;
      --color-primary-500: #7B6D4D;
      --color-primary-600: #62573e;
      --color-primary-700: #4a412e;
      --color-primary-800: #312b1f;
      --color-primary-900: #19150f;
      --color-primary-950: #0c0b08;
      --color-accent: #7B6D4D;
      --color-accent-hover: #62573e;
      --color-accent-foreground: #F4F1EA;
      --color-ring: #7B6D4D;
      --color-focus: #ebe5db;
    }
    .dark {
      --color-accent: #af976f;
      --color-accent-hover: #c3b193;
      --color-accent-foreground: #1C1C1C;
      --color-ring: #af976f;
      --color-focus: #312b1f;
    }
  `,
};

// Decorator that applies accent from globals
const withAccent: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const { accent } = context.globals;

  useEffect(() => {
    const styleId = 'storybook-accent-styles';
    let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;

    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    const accentKey = accent || 'teal';
    styleEl.textContent = accentStyles[accentKey as keyof typeof accentStyles] || accentStyles.teal;

    return () => {
      // Keep styles on unmount for smoother transitions
    };
  }, [accent]);

  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    accent: {
      name: 'Aksent',
      description: 'App-spesifikk aksentfarge',
      defaultValue: 'teal',
      toolbar: {
        icon: 'paintbrush',
        title: 'Aksent',
        items: [
          { value: 'teal', title: 'Teal (Lyttejeger, Sporjeger)' },
          { value: 'forest', title: 'Forest (Skrive)' },
          { value: 'earth', title: 'Earth (Trakke)' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    options: {
      storySort: {
        order: [
          'Om designsystemet',
          'Foundations',
          ['Temaer', 'Farger', 'Typografi', 'Spacing', 'Shadows & Radius', 'Ikoner'],
          'Komponenter',
          'Patterns',
          ['Skjemamonstre', 'Layoutmonstre'],
          'Guidelines',
          ['Tilgjengelighet'],
          'Theme Editor',
          '*',
        ],
      },
    },
    controls: {
      expanded: true,
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
    docs: {
      toc: {
        headingSelector: 'h2, h3',
        title: 'Innhold',
      },
    },
  },
  decorators: [
    withAccent,
    withThemeByClassName({
      themes: {
        Lys: '',
        Mork: 'dark',
      },
      defaultTheme: 'Lys',
    }),
  ],
};

export default preview;
