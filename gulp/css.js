var gulp = require('gulp')
var stylus = require('gulp-stylus')
var minifyCSS = require('gulp-minify-css')
var sourcemaps = require('gulp-sourcemaps')
var prefix = require('gulp-autoprefixer')
var concat = require('gulp-concat')

gulp.task('css', function () {
  gulp.src('css/**/*.styl')
  .pipe(sourcemaps.init())
    .pipe(prefix())
    .pipe(concat('main.css'))
    .pipe(stylus())
    .pipe(minifyCSS())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('assets'))
})

gulp.task('watch:css', ['css'], function () {
  gulp.watch('css/**/*.styl', ['css'])

})
