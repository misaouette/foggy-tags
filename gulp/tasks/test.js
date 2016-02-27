import gulp from 'gulp';
import karma from 'karma';

import config from '../../karma.conf';

gulp.task('test:dev', done => {
  var server = new karma.Server(config, [done])	
  server.start();
});
