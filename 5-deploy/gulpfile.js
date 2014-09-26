var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('default', function () {
  return gulp.src('public/*')
    .pipe(sftp({
      host: '108.168.213.88',
      auth: 'mainKey',
      remotePath: '/home/kiler6/deploy_cafe_com_dev'
    }));
});
