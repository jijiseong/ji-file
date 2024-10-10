/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@ji-file/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  ignorePatterns: ['*.config.*'],
};
