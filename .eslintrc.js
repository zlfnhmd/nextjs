// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

module.exports = {
  env: {
    browser: true,
  },
  extends: ['@cleartax'],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'class-methods-use-this': ['error', { exceptMethods: ['render', 'componentDidCatch'] }],
  },
  settings: {
    'react': {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        directory: resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
};
