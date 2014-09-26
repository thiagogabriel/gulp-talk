var gulp = require('gulp')
  , sass = require('gulp-sass')
  , coffee = require('gulp-coffee')
;

gulp.task('sass', function () {
  gulp.src('./_sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('coffee', function(){
  gulp.src('./coffeescript/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./javascript'));
})
