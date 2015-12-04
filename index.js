/////////////////////////////////
// Settings
/////////////////////////////////
var websiteUrl = 'unionen.dev';

/////////////////////////////////
// Requirements
/////////////////////////////////
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();

Date.prototype.timeNow = function() {
  'use strict';
  return ((this.getHours() < 10) ? '0' : '') + this.getHours() + ':' + ((this.getMinutes() < 10) ? '0' : '' ) + this.getMinutes() + ':' + ((this.getSeconds() < 10) ? '0' : '') + this.getSeconds();
};

require('./js/js.js').bs(browserSync);;
require('./css/css.js').bs(browserSync);
require('./svg/svg.js');

/////////////////////////////////
// Tasks
// * watch
// * clean
// * compile
// * default
/////////////////////////////////
gulp.task('watch', ['js-watch', 'css-watch', 'svg-watch']);
gulp.task('clean', ['js-clean', 'css-clean', 'svg-clean']);
gulp.task('compile', ['js-compile', 'css-compile', 'svg-compile']);

gulp.task('default', ['compile', 'watch'], function(){
  "use strict";

  browserSync.init({
    proxy: websiteUrl,
    open: false,
  });

  gutil.log(gutil.colors.green('Done compiling! Now watching...'));
});
