var gulp = require('gulp')
var stylus = require('gulp-stylus')
var cssMinify = require('gulp-minify-css')


gulp.task('css', function () {
  gulp.src('css/**/*.styl')
    .pipe(stylus())
    .pipe(cssMinify())
})


gulp.task('watch:css', function () {
  gulp.watch('css/**/*.styl', ['css'])
})
