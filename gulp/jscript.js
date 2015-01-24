var gulp = require('gulp')
var concat = require('gulp-concat')
// var sourcemaps = require('gulp-sourcemaps')
// var uglify = require('gulp-uglify')
// var ngAnnotate = require('gulp-ng-annotate')
// var livereload = require('gulp-livereload')

gulp.task('js', function () {
  gulp.src(['ng/module.js', 'ng/routes.js', 'ng/**/*.js'])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('assets'))
})

gulp.task('watch:js', ['js'], function () {

  gulp.watch('ng/**/*.js', ['js'])
})
