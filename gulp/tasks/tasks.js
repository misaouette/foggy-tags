import gulp from 'gulp';
import run from 'run-sequence';

import config from '../config';

gulp.task('dev', () => {
	run('clean:dev', ['html:dev', 'js:dev', 'css:dev', 'data:dev'], 'server:dev', 'test:dev');
	gulp.watch(config.path.css.files, ['css:dev']);
	gulp.watch(config.path.js.files, ['js:dev']);
	gulp.watch(config.path.html.files, ['html:dev']);
});

gulp.task('dist', () => {
	run('clean:dist', ['html:dist', 'js:dist', 'css:dist', 'data:dist'], 'server:dist');	
	gulp.watch(config.path.css.files, ['css:dist']);
	gulp.watch(config.path.js.files, ['js:dist']);
	gulp.watch(config.path.html.files, ['html:dist']);
});

gulp.task('default', ['dev']);
