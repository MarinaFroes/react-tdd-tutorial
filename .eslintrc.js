module.exports = {
  extends: [
    'codingitwrong',
  ],
  parser: 'babel-eslint',
  plugins: [
    'jest',
    'cypress',
    'react'
  ],
  env: {
    'jest/globals': true,
    'node': true,
    'browser': true,
    'cypress/globals': true,
  },
};
