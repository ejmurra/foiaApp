var gulp = require('gulp')
var fs = require('fs')
var nodemon = require('gulp-nodemon')

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
  require('./gulp/' + task)
})

gulp.task('dev:server', function () {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['ng*', 'gulp*', 'assets*']
  })
})

gulp.task('dev', ['clean', 'watch:css', 'watch:js', 'dev:server'])
