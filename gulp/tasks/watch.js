'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('watch', ['nodemon', 'css'], function() {
  $.livereload.listen();

  gulp.watch([
    '.tmp/styles/**/*.css',
    'app/images/**/*'
  ]).on('change', $.livereload.changed);

  require('opn')('http://localhost:9000');
});
