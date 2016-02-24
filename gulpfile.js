var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');

gulp.task('sass-demo', function() {
  return gulp.src('app/scss/styles.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['sass-demo']);
});

gulp.task('default', function(callback) {
  runSequence(['sass-demo', 'watch'],
    callback
  );
});