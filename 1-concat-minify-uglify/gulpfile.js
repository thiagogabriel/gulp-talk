var gulp = require('gulp')
  , minifyCSS = require('gulp-minify-css')
  , rename = require('gulp-rename')
;

gulp.task('minify-css', function() {
  gulp.src('css/style.css')
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets'))
});
