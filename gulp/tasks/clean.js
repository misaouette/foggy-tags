import gulp from 'gulp';
import rimraf from 'rimraf';

import config from '../config';

gulp.task('clean:dev', cb => {
  rimraf(config.dev.dir, cb);
});

gulp.task('clean:dist', cb => {
  rimraf(config.dist.dir, cb);
});
