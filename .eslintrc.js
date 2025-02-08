module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
    'unused-imports/no-unused-imports': 'warn',
  },
};
