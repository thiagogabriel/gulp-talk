var gulp = require('gulp')
  , minifyCSS = require('gulp-minify-css')
  , concat = require('gulp-concat')
  , rename = require('gulp-rename')
;

gulp.task('minify-css', function() {
  gulp.src('css/*.css')
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets'))
});
