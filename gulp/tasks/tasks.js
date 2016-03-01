import gulp from 'gulp';
import run from 'run-sequence';

import config from '../config';

gulp.task('dev', () => {
	run('clean:dev', ['html:dev', 'js:dev', 'css:dev', 'data:dev'], 'server:dev', 'test:dev');
});

gulp.task('dist', () => {
	run('clean:dist', ['html:dist', 'js:dist', 'css:dist', 'data:dist'], 'server:dist');
});

gulp.task('default', ['dev']);
