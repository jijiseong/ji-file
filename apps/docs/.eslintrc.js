const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,

  parserOptions: {
    project: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'turbo',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',

  plugins: ['only-warn'],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    '*.config.*',
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
};
