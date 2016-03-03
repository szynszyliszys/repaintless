var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');

gulp.task('sass-demo', function() {
  return gulp.src('demo/scss/styles.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('demo/css'));
});

gulp.task('sass-build', function() {
  return gulp.src('repaintless-scss/repaintless.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('repaintless-css'))
  .pipe(gulp.dest('demo/css'))
  .pipe(cssnano())
  .pipe(rename("repaintless.min.css"))
  .pipe(gulp.dest('repaintless-css'));
});

gulp.task('clean:repaintless-css', function() {
  return del.sync('repaintless-css');
});

gulp.task('watch-animations', function() {
  gulp.watch('repaintless-scss/**/*.scss', ['sass-build']);
});

gulp.task('default', function(callback) {
  runSequence(['sass-build', 'watch-animations'],
    callback
  );
});

gulp.task('build', function(callback) {
  runSequence('clean:repaintless-css', 'sass-build', callback);
});

gulp.task('watch-demo', function() {
  gulp.watch('demo/scss/**/*.scss', ['sass-demo']);
});

gulp.task('demo', ['watch-animations'], function(callback) {
  runSequence(['sass-demo', 'watch-demo'],
    callback
  );
});