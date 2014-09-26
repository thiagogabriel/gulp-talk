var gulp = require('gulp');
var sass = require('gulp-sass')

gulp.task('sass', function () {
    gulp.src('./_sass/style.scss')
      .pipe(sass())
      .pipe(gulp.dest('./css'));
});
