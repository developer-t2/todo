module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'no-use-before-define': 0,
    'linebreak-style': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-shadow': 0,
    'arrow-parens': 0,
    'no-confusing-arrow': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'comma-dangle': 0,
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0,
    'react/prop-types': 0,
    'arrow-body-style': 0,
    'object-curly-newline': 0,
    'no-undef': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
