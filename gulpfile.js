var gulp = require('gulp');
var postcss = require('gulp-postcss')
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');

gulp.task('sass-demo', function() {
  return gulp.src('scss/styles.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(postcss([ autoprefixer() ]))
  .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass-demo']);
});

gulp.task('default', function(callback) {
  runSequence(['sass-demo', 'watch'],
    callback
  );
});