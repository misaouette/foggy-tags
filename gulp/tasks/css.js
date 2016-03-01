import gulp from 'gulp';
import concat from 'gulp-concat';

import config from '../config';

gulp.task('css:dev', () => {
	return gulp.src(config.path.css.files)
	.pipe(concat('bundle.css'))
	.pipe(gulp.dest(config.dev.css))
	.on('error', config.handleError);
});

gulp.task('css:dist', () => {
	return gulp.src(config.path.css.files)
	.pipe(concat('bundle.css'))
	.pipe(gulp.dest(config.dist.css))
	.on('error', config.handleError);
});