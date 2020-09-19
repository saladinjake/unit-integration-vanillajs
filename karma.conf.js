'use strict';

module.exports = karmaConfig;

function karmaConfig(configuration) {
  configuration.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    colors: true,
    preprocessors: {
      'tests/unit/**/*.js': ['webpack'],
    },
    files: [
      'tests/unit/**/*.spec.js'
    ],
    frameworks: [
      'mocha',
      'sinon-chai'
    ],
    reporters: ['progress'],
    port: 8123,
    singleRun: false,
  });
}
