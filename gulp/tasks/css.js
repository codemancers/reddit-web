'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('css', function() {
  return gulp.src('src/styles/app.css')
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('.tmp/styles'));
});
