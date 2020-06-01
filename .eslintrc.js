module.exports = {
  extends: [
    'codingitwrong',
  ],
  parser: 'babel-eslint',
  plugins: [
    'jest',
    'cypress',
  ],
  env: {
    'jest/globals': true,
    'node': true,
    'browser': true,
    'cypress/globals': true,
  },
};
