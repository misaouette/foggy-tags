import gulp from 'gulp';
import merge from 'merge-stream'
import browserify from 'browserify'
import source from 'vinyl-source-stream';

import config from '../config';


gulp.task('js:dev', () => {
  const thirdjs = gulp.src(config.path.third.js.files)
  .pipe(gulp.dest(config.dev.js))
  .on('error', config.handleError);

  const js = gulp.src(config.path.js.files)
  .pipe(gulp.dest(config.dev.js))
  .on('error', config.handleError);
  return merge(thirdjs, js);
});


gulp.task('js:dist', () => {
  const thirdjs = gulp.src(config.path.third.js.files)
  .pipe(gulp.dest(config.dist.js))
  .on('error', config.handleError);

  // Here Browerify is only used to babelify. We don't want to include react dependencies as it would break the dev world

  const js = browserify({
    entries: config.path.js.entry,
    debug: false
  })
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('bundle.js')) //bundle js name
  .pipe(gulp.dest(config.dist.js));

  return merge(thirdjs, js);
});