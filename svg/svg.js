/////////////////////////////////
// Settings
/////////////////////////////////
var svgStoreName = 'icons';
var svgFiles = './images/svg/' + svgStoreName + '/*.svg';
var filesToWatch = [svgFiles];
var destFolder = './dist';

/////////////////////////////////
// Requirements
/////////////////////////////////
var gulp = gulp || require('gulp');
var gutil = gutil || require('gulp-util');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var size = require('gulp-size');
var del = require('del');
var notifier = require('node-notifier');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var exec = require('child_process').exec;

Date.prototype.timeNow = function () {
  return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
};

/////////////////////////////////
// Tasks
// * svg-watch
// * svg-clean
// * svg-compile
/////////////////////////////////
gulp.task('svg-watch', function() {
  gulp.watch(filesToWatch, ['svg-compile']);
});

gulp.task('svg-clean', function(cb) {
  del([destFolder + '/' + svgStoreName + '.svg']).then(function (paths) {
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

gulp.task('svg-compile', ['svg-clean'], function () {
  var s = size({
    showFiles: true
  });

  return gulp
    .src(svgFiles)
    .pipe(gulpif(argv.prod, svgmin({
      plugins: [{
        removeUnknownsAndDefaults: true
      }]
    })))
    .pipe(svgstore())
    .pipe(s)
    .pipe(gulp.dest(destFolder))
    .on('error', gutil.log)
    .on('end', function(){
      notifier.notify({
        title: 'SVG Compiled @ ' + ((new Date()).timeNow()),
        message: s.prettySize,
        icon: 'gulpfile.js/svg/svg.png'
      });
      gutil.log(gutil.colors.green('SVG Compiled.'));
    });
});
