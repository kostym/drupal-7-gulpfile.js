// ///////////////////////////////
// Configuration
// ///////////////////////////////
var config = require(process.cwd()+'/gulpfile.config.js');

// ///////////////////////////////
// Requirements
// ///////////////////////////////
var gulp = gulp || require('gulp');
var gutil = gutil || require('gulp-util');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var size = require('gulp-size');
var del = require('del');
var notifier = require('node-notifier');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');

Date.prototype.timeNow = function() {
  'use strict';
  return ((this.getHours() < 10) ? '0' : '') + this.getHours() + ':' + ((this.getMinutes() < 10) ? '0' : '' ) + this.getMinutes() + ':' + ((this.getSeconds() < 10) ? '0' : '') + this.getSeconds();
};

// ///////////////////////////////
// Tasks
// * svg-watch
// * svg-clean
// * svg-compile
// ///////////////////////////////
gulp.task('svg-watch', function() {
  'use strict';
  gulp.watch([config.tasks.svg.svgFiles], ['svg-compile']);
});

gulp.task('svg-clean', function(cb) {
  'use strict';
  del([config.tasks.svg.destinationFolder + '/' + config.tasks.svg.svgStoreName + '.svg']).then(function(paths) {
    if (paths.length) {
      gutil.log(
        gutil.colors.yellow('Deleted SVG file:\n'),
        gutil.colors.gray(paths.join('\n'))
      );
    } else {
      gutil.log(gutil.colors.yellow('No SVG to delete...'));
    }
    cb();
  });
});

gulp.task('svg-compile', ['svg-clean'], function() {
  'use strict';
  var fileSize = size({
    showFiles: true
  });

  return gulp
    .src(config.tasks.svg.svgFiles)
    .pipe(gulpif(argv.prod, svgmin(config.tasks.svg.plugins.svgmin)))
    .pipe(svgstore())
    .pipe(fileSize)
    .pipe(gulp.dest(config.tasks.svg.destinationFolder))
    .on('error', gutil.log)
    .on('end', function() {
      'use strict';
      notifier.notify({
        title: 'SVG Compiled @ ' + ((new Date()).timeNow()),
        message: fileSize.prettySize,
        icon: 'gulpfile.js/svg/svg.png'
      });
      gutil.log(gutil.colors.green('SVG Compiled.'));
    });
});
