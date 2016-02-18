var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
  return gulp.src('app/scss/styles.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('app/css'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('default', function(callback) {
  runSequence(['sass', 'watch'],
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence('clean:dist', ['sass', 'fonts'], callback);
});