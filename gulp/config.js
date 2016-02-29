import gutil from 'gulp-util';

export default {

  port: {
    dev: 8080,
    dist: 8081
  },

  path: {
    js: {
      files: [['src/**/*.js','!src/**/*test.js']], //filter out test files
      entry: 'src/main.js'
    },
    css: {
      files: 'src/**/*.css'
    },
    html: {
      files: 'index.html'
    },
    data: {
      files: 'data/**/*.json'
    },
    tests: {
      files: 'karma.conf.js'
    }
  },

  dev: {
    dir: 'dev',
    js: 'dev/js',
    css: 'dev/css',
    html: 'dev',
    data: 'dev/data'
  },

  dist: {
    dir: 'dist',
    js: 'dist/js',
    css: 'dist/css',
    html: 'dist',
    data: 'dist/data'
  },

  htmlReplace: {
    'js': ['js/jquery.min.js']
  },

  handleError: gutil.log
};
