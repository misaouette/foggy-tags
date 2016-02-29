import gulp from 'gulp';
import merge from 'merge-stream';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';

import config from '../config';


gulp.task('js:dev', () => {
  return browserify({
    entries: config.path.js.entry,
    debug: true
  })
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .on('error', function (err) {
    config.handleError(err);
    this.emit('end');
  })
  .pipe(source('bundle.js')) //bundle js name
  .pipe(gulp.dest(config.dev.js));
});


gulp.task('js:dist', () => {
  return browserify({
    entries: config.path.js.entry,
    debug: false
  })
  .transform("envify", {global:true, NODE_ENV: "production"}, {global: true})
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()  
  .on('error', function (err) {
    config.handleError(err);
    this.emit('end');
  })
  .pipe(source('bundle.js')) //bundle js name
  .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
  .pipe(uglify()) // now gulp-uglify works 
  .pipe(gulp.dest(config.dist.js));
});