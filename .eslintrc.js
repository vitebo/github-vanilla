module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['src/server.js', 'webpack.config.js'],
    }],
  },
  overrides: [
    {
      files: ['**/tests/**/*.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/all'],
      env: {
        'jest/globals': true,
      },
    },
  ],
};
