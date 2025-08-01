import js from '@eslint/js';
import globals from 'globals';

export default [
  { ignores: ['dist'] },

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
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'no-undef': 'off',
    },
  },

  // Node.js context (e.g., vite config, sitemap generator)
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
];
