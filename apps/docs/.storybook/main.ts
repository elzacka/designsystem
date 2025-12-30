import type { StorybookConfig } from '@storybook/react-vite';

// Script to disable onboarding checklist before Storybook loads
const disableOnboardingScript = `
<script>
(function() {
  var items = {
    accessibilityTests: { status: 'closed' },
    autodocs: { status: 'closed' },
    ciTests: { status: 'closed' },
    controls: { status: 'closed' },
    coverage: { status: 'closed' },
    guidedTour: { status: 'closed' },
    installA11y: { status: 'closed' },
    installChromatic: { status: 'closed' },
    installDocs: { status: 'closed' },
    installVitest: { status: 'closed' },
    mdxDocs: { status: 'closed' },
    moreComponents: { status: 'closed' },
    moreStories: { status: 'closed' },
    onboardingSurvey: { status: 'closed' },
    organizeStories: { status: 'closed' },
    publishStorybook: { status: 'closed' },
    renderComponent: { status: 'closed' },
    runTests: { status: 'closed' },
    viewports: { status: 'closed' },
    visualTests: { status: 'closed' },
    whatsNewStorybook10: { status: 'closed' },
    writeInteractions: { status: 'closed' }
  };
  localStorage.setItem('@storybook/manager/store', JSON.stringify({
    checklist: { items: items, widget: { disable: true } }
  }));
})();
</script>
`;

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  managerHead: (head) => `${head}${disableOnboardingScript}`,
  docs: {
    defaultName: 'Dokumentasjon',
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  viteFinal: async (config) => {
    if (process.env.STORYBOOK_BASE) {
      config.base = process.env.STORYBOOK_BASE;
    }
    return config;
  },
};

export default config;
