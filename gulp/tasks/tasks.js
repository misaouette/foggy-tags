import gulp from 'gulp';
import run from 'run-sequence';

import config from '../config';

gulp.task('dev', () => {
	run('clean:dev', ['html:dev', 'js:dev', 'css:dev'], 'server:dev');
	gulp.watch(config.path.css.files, ['css:dev']);
	gulp.watch(config.path.js.files, ['js:dev']);
});

gulp.task('dist', () => {
	run('clean:dist', ['html:dist', 'js:dist', 'css:dist'], 'server:dist');	
	gulp.watch(config.path.css.files, ['css:dist']);
	gulp.watch(config.path.js.files, ['js:dist']);
});

gulp.task('default', ['dev']);
