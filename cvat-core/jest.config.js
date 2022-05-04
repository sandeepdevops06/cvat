// Copyright (C) 2019-2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

const { defaults } = require('jest-config');

module.exports = {
    // import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
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
    coverageDirectory: 'reports/coverage',
    coverageReporters: ['json', ['lcov', { projectRoot: '../' }]],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    reporters: ['default', ['jest-junit', { outputDirectory: 'reports/junit' }]],
    testMatch: ['**/tests/**/*.js'],
    testPathIgnorePatterns: ['/node_modules/', '/tests/mocks/*'],
    automock: false,
};
