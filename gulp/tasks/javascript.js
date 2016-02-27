import gulp from 'gulp';
import merge from 'merge-stream'
import browserify from 'browserify'
import source from 'vinyl-source-stream';

import config from '../config';


gulp.task('js:dev', () => {
   return browserify({
    entries: config.path.js.entry,
    debug: false
  })
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('bundle.js')) //bundle js name
  .pipe(gulp.dest(config.dev.js));
});


gulp.task('js:dist', () => {
  return browserify({
    entries: config.path.js.entry,
    debug: false
  })
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('bundle.js')) //bundle js name
  .pipe(gulp.dest(config.dist.js));
});