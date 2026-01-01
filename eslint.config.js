import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  // Ignore patterns
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/storybook-static/**',
      '**/coverage/**',
      '**/.storybook/**',
      'apps/lyttejeger/**',
    ],
  },

  // Base JavaScript configuration
  js.configs.recommended,

  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Test files configuration
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Story files configuration
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },

  // Prettier compatibility (must be last)
  prettier
);
