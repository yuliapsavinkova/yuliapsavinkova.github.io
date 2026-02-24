import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default [
  { ignores: ['dist', 'node_modules'] },

  // Main config: browser JS
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        HTMLElement: 'readonly',
        customElements: 'readonly',
        CSS: 'readonly',
        performance: 'readonly',
        URLSearchParams: 'readonly',
        gtag: 'readonly', // Added for your GA tracking
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'no-undef': 'error', // Changed to error now that globals are defined
      quotes: ['error', 'single', { avoidEscape: true }], // Enforce single quotes
    },
  },

  // Node.js context
  {
    files: ['vite.config.js', 'generate-sitemap.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },

  // Apply Prettier config last to disable conflicting rules
  prettierConfig,
];
