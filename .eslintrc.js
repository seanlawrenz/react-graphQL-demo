module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    'cypress/globals': true,
  },
  extends: ['airbnb', 'eslint-config-prettier'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'eslint-plugin-cypress'],
  rules: {
    'arrow-body-style': [1, 'as-needed'],
    'arrow-parens': 0,
    'react/jsx-one-expression-per-line': 0,
    indent: ['error', 4],
    'comma-dangle': [2, 'always-multiline'],
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'max-len': 0,
    'linebreak-style': 'off',
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
        allowChildren: false,
      },
    ],
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/no-unescaped-entities': 1,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
