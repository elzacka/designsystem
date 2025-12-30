import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@designsystem/tokens/css': path.resolve(dirname, 'packages/tokens/src/index.css'),
      '@designsystem/tokens': path.resolve(dirname, 'packages/tokens/src'),
      '@designsystem/core/css': path.resolve(dirname, 'packages/core/dist/index.css'),
      '@designsystem/core': path.resolve(dirname, 'packages/core/src'),
    },
  },
  test: {
    projects: [
      // Unit tests project
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'jsdom',
          setupFiles: ['./vitest.setup.ts'],
          include: ['packages/**/*.test.{ts,tsx}'],
          exclude: ['**/node_modules/**', '**/dist/**'],
        },
      },
      // Storybook tests project
      // Note: The storybookTest plugin dynamically sets the project name
      // to `storybook:${configDir}` when VITEST_STORYBOOK=true (set by Storybook UI)
      {
        extends: true,
        plugins: [storybookTest({ configDir: path.join(dirname, 'apps/docs/.storybook') })],
        test: {
          // This name is used for CLI filtering. Storybook UI uses the dynamic name.
          name: `storybook:${path.join(dirname, 'apps/docs/.storybook')}`,
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: [path.join(dirname, 'apps/docs/.storybook/vitest.setup.ts')],
        },
      },
    ],
  },
});
