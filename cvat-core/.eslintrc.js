// Copyright (C) 2018-2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
        'jest/globals': true,
    },
    ignorePatterns: [
        '.eslintrc.js',
        'webpack.config.js',
        // import 'core-js/es6/symbol';
 import 'core-js/es6/object';
 import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
        'jest.config.js',
        'jsdoc.config.js',
        'src/3rdparty/**',
        'node_modules/**',
        'dist/**',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaVersion: 2018,
    },
    plugins: ['jest'],
    rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
      }
};
