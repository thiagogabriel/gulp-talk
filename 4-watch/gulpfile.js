var gulp = require('gulp')
  , sass = require('gulp-sass')
  , coffee = require('gulp-coffee')
;

gulp.task('sass', function () {
  return gulp.src('_sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('coffee', function() {
  return gulp.src('coffeescript/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('javascript'));
})

gulp.task('watch', function() {
  gulp.watch('_sass/*.scss', ['sass']);
  gulp.watch('coffeescript/*.coffee', ['coffee']);
});
