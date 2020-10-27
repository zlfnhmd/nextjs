// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

module.exports = {
  extends: ['@cleartax'],
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
