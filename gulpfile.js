// Process ES6 on the fly
require('babel-register')({
  presets: [ 'es2015' ]
});
// Include every file in gulp/scripts
require('require-dir')('gulp/tasks');
