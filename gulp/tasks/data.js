import gulp from 'gulp';

import config from '../config';

gulp.task('data:dev', () => {
  return gulp.src(config.path.data.files)
    .pipe(gulp.dest(config.dev.data));
});

gulp.task('data:dist', () => {
  return gulp.src(config.path.data.files)
    .pipe(gulp.dest(config.dist.data));
});