'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())// init before SASS compilation
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: [    
      "last 1 version",
      "> 1%",
      "IE 10"
    ],
      cascade: false
  }))
  .pipe(sourcemaps.write('../maps'))//write LAST
  .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));