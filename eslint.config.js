// ESLint v10 flat config
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    // Apply to all TypeScript files
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // TypeScript recommended rules (manually expanded for flat config compatibility)
      ...tsPlugin.configs['recommended'].rules,

      // Prettier integration — formats as ESLint errors
      'prettier/prettier': 'error',

      // Relax some strict rules that conflict with exercise stubs
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  // Disable ESLint rules that conflict with Prettier formatting
  {
    rules: prettierConfig.rules,
  },
];
