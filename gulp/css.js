var gulp = require('gulp')
var stylus = require('gulp-stylus')
var cssMinify = require('gulp-minify-css')
var livereload = require('gulp-livereload')
var autoprefix = require('gulp-autoprefixer')

gulp.task('css', function () {
  gulp.src('css/**/*.styl')
    .pipe(stylus())
    .pipe(autoprefix())
    .pipe(cssMinify())
    .pipe(gulp.dest('assets'))
    .pipe(livereload())
})


gulp.task('watch:css', function () {
  livereload.listen()
  gulp.watch('css/**/*.styl', ['css'])
})
