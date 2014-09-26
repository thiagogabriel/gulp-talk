var gulp = require('gulp')
  , minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', function() {
  gulp.src('css/style.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets'))
});
