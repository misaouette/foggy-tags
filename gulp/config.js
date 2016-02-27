import gutil from 'gulp-util';

export default {

  port: {
    dev: 8080,
    dist: 8081
  },

  path: {
    third: {
      js: {
        files: [
        'bower_components/react/react.js', 
        'bower_components/react/react-dom.js'
        ]
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
    tests: {
      files: 'karma.conf.js'
    }
  },

  dev: {
    dir: 'dev',
    js: 'dev/js',
    css: 'dev/css',
    html: 'dev'
  },

  dist: {
    dir: 'dist',
    js: 'dist/js',
    css: 'dist/css',
    html: 'dist'
  },

  htmlReplace: {
    'jsheader': [],
    'js': ['js/bundle.js'],
    'css': 'css/bundle.css'
  },

  handleError: gutil.log
};
