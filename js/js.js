// ///////////////////////////////
// Configuration
// ///////////////////////////////
var config = require(process.cwd()+'/gulpfile.config.js');

// ///////////////////////////////
// Requirements
// ///////////////////////////////
var gulp = gulp || require('gulp');
var gutil = gutil || require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var babel = require('gulp-babel');
var del = require('del');
var notifier = require('node-notifier');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var eslint = require('gulp-eslint');
var browserSync;

exports.bs = function(bs) {
  'use strict';
  browserSync = bs;
};

// ///////////////////////////////
// Tasks
// * js-watch
// * js-clean
// * js-compile
// ///////////////////////////////
gulp.task('js-watch', function() {
  gulp.watch([config.tasks.js.jsFiles], ['js-compile']).on('change', browserSync.reload);
});

gulp.task('js-clean', function(cb) {
  'use strict';
  del([config.tasks.js.destinationFolder + '/**/*.js', config.tasks.js.destinationFolder + '/**/*.js.map'])
    .then(function(paths) {
      if (paths.length) {
        gutil.log(
          gutil.colors.yellow('Deleted JS files:\n'),
          gutil.colors.gray(paths.join('\n'))
        );
      } else {
        gutil.log(gutil.colors.yellow('No JS to delete...'));
      }
      cb();
    });
});

gulp.task('js-compile', ['js-clean'], function() {
  var fileSize = size({
    showFiles: true
  });
  return gulp.src(config.tasks.js.jsFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulpif(argv.prod, eslint.failAfterError()))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat(config.tasks.js.outputFileName, {
      newLine: '\n;'
    }))
    .pipe(gulpif(argv.prod, uglify()))
    .pipe(fileSize)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.tasks.js.destinationFolder))

    .on('error', gutil.log)
    .on('end', function() {
      'use strict';
      notifier.notify({
        title: 'JS Compiled @ ' + ((new Date()).timeNow()),
        message: fileSize.prettySize,
        icon: 'gulpfile.js/js/js.png'
      });

      gutil.log(gutil.colors.green('JS Compiled.'));
    });
});

