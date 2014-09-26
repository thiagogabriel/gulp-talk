var gulp = require('gulp')
  , sass = require('gulp-sass')
  , coffee = require('gulp-coffee')
  , autoprefixer = require('gulp-autoprefixer')
;

gulp.task('sass', function () {
  return gulp.src('./_sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('coffee', function() {
  return gulp.src('./coffeescript/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./javascript'));
})

gulp.task('prefixer', function() {
  return gulp.src('css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('css'));
})
