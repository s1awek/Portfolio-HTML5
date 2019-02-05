'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create(); 

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

gulp.task('copyCSS', function(){
  return gulp.src('./css/**/*')
  .pipe( (gulp.dest('prod/css/')) );
});
gulp.task('copyJS', function(){
  return gulp.src('./js/**/*')
  .pipe( (gulp.dest('prod/js/')) );
});
gulp.task('copyIMG', function(){
  return gulp.src('./img/**/*')
  .pipe( (gulp.dest('prod/img/')) );
});
gulp.task('copyMAPS', function(){
  return gulp.src('./maps/**/*')
  .pipe( (gulp.dest('prod/maps/')) );
});
gulp.task('copyFONTS', function(){
  return gulp.src('./fonts/**/*')
  .pipe( (gulp.dest('prod/fonts/')) );
});
gulp.task('copyHTML', function(){
  return gulp.src('./*.html')
  .pipe( (gulp.dest('prod/')) );
});

gulp.task('prod', gulp.series('sass', 'copyCSS', 'copyJS', 'copyIMG', 'copyMAPS', 'copyFONTS', 'copyHTML'));

gulp.task('watch', function() {
  browserSync.init({
    server: {
        baseDir: "./"
    },
    'notify': false
  });
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
    gulp.watch(['**/*.html','./css', './js']).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('sass', 'watch'));