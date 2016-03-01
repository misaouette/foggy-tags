import gulp from 'gulp';
import browserSync from 'browser-sync';

import config from '../config';

gulp.task('server:dev', () => {
  browserSync.init([
    config.dev.css + '/**/*.css',
    config.dev.js + '/**/*.js',
    config.dev.dir + '/**/*.html',
    config.dev.data + '/**/*.json'
    ], {
      notify: false,
      server: {
        baseDir: [config.dev.dir]
      },
      port: config.port.dev,
      browser: [],
      tunnel: false
    });

  gulp.watch(config.path.css.files, ['css:dev']);
  gulp.watch(config.path.js.files, ['js:dev']);
  gulp.watch(config.path.html.files, ['html:dev']);
});


gulp.task('server:dist', () => {
  browserSync.init([
    config.dist.css + '/**/*.css',
    config.dist.js + '/**/*.js',
    config.dist.dir + '/**/*.html',
    config.dist.data + '/**/*.json'
    ], {
      notify: false,
      server: {
        baseDir: [config.dist.dir]
      },
      port: config.port.dist,
      browser: ['google-chrome'],
      tunnel: false
    });
});