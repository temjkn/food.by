var gulp = require('gulp');
var pug = require('gulp-pug');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');


gulp.task('pug', function() {
  return gulp.src(['source/pug/*.pug', '!source/pug/_template.pug'])
    .pipe(plumber())
    .pipe(changed('build', {extension: '.html'}))
    .pipe(
      pug({
      	pretty: true
      })
    )
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});