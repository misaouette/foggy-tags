# foggy-tags

FoggyTags is my implementation of the Challenge.

## Instructions

npm, gulp and browserify should be installed before running any further command.

### Run the production version:

1. Install node packages ``$ npm install``

2. Run the application ``$ npm start``

Chrome should open in a few seconds on the application page. If not please visit: `http://localhost:8081/`


### Run the development version:

1. Install node packages (if not done yet) ``$ npm install``

2. Run the application ```$ gulp [dev]```
Both local server and test server should be launched. Visit `http://localhost:8080/` to access the application.




## Room for improvement

### Quality 
This application could also benefit from Test coverage.

### CSS
The global component architecture could be improved by making use of Radium or CSS Modules that could be called from within the components. By attaching all styling locally, it would remove all chances of css classnames collision. CSS properties could also be passed through props when needed.


## Third-party Libraries
UI Framework/libs: React/JSX/ES6 + D3.js

Test framework: karma/jasmine

Module bundler: browserify 

Preprocessor: babelify with presets es2015+react

Task runner: gulp

Package Manager: npm
