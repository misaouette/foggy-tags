import gutil from 'gulp-util';

export default {

  port: {
    dev: 8080,
    dist: 8081
  },

  path: {
    third: {
      dev: {
        js: {
          files: [
          'node_modules/jquery/dist/jquery.js'
          ]
        }
      },
      dist: {
        js: {
          files: [
          'node_modules/jquery/dist/jquery.min.js'
          ]
        }
      }
    },
    js: {
      files: 'src/**/*.js',
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
    'js': ['js/jquery.min.js'],
    'css': 'css/bundle.css'
  },

  handleError: gutil.log
};
