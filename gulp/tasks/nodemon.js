'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('nodemon', function() {
  var cwd = __dirname + '/../../';

  $.nodemon({
      cwd: cwd,
      script: 'server.js',
      ext: 'json js',
      watch: [
        'server.js'
      ]
    });
});
