import gulp from 'gulp';
import karma from 'karma';

import config from '../config';


gulp.task('test:dev', done => {
	console.log(config.path.tests.files);
  var server = new karma.Server({
  	configFile: `${__dirname}/../../${config.path.tests.files}`
  }, done)	
  server.start();
});
