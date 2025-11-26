// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['src/**/*.ts'], 
    languageOptions: {
      globals: {
        NodeJS: true,
      },
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
      env: {
        node: true,
      },
    },
    rules: {
      ...tseslint.configs.strict[0].rules,
      ...tseslint.configs.stylistic[0].rules,
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  }
);
