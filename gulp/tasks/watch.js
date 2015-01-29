'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('watch', ['nodemon', 'css'], function() {
  $.livereload.listen();

  gulp.watch([
    '.tmp/styles/**/*.css',
    'src/images/**/*'
  ]).on('change', $.livereload.changed);

  gulp.watch('src/styles/app.css', ['css']);

  require('opn')('http://localhost:9000');
});
