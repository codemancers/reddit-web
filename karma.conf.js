'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['jspm', 'jasmine'],

    jspm: {
      config: 'src/scripts/jspm.js',
      loadFiles: ['test/**/*Spec.js'],
      serveFiles: ['src/**/*.js'],
    },

    proxies: {
      '/jspm_packages': __dirname + '/jspm_packages'
    },

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['Chrome'],

    reporters: ['spec'],

    singleRun: true
  });
};
