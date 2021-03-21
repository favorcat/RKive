module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true
    },
    extends: [
      'standard',
      'plugin:vue/vue3-recommended'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
      ecmaVersion: 2018
    }
  }