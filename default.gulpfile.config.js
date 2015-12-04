module.exports = {
  'general': {
    'pathToEditor': '/Applications/PhpStorm.app/Contents/MacOS/phpstorm',
    'plugins': {
      'browserSync': {
        'proxy': 'loc.yoursite.com',
        'open': false
      }
    }
  },
  'tasks': {
    'css': {
      'destinationFolder': './dist',
      'sassFiles': [
        './scss/style.scss'
      ],
      'filesToWatch': [
        './scss/**/*.scss',
        './kostym_components/**/*.scss'
      ],
      'plugins': {
        'base64': {
          'baseDir': './dist',
          'extensions': ['svg']
        },
        'autoprefixer': {
          'browsers': ['last 2 versions', 'ie >= 9'],
          'cascade': false
        }
      }
    },
    'js': {
      'jsFiles': './kostym_components/**/*.js',
      'destinationFolder': './dist',
      'outputFileName': 'script.js'
    },
    'svg': {
      'svgStoreName': 'icons',
      'svgFiles': './images/svg/icons/*.svg',
      'destinationFolder': './dist',
      'plugins': {
        'svgmin': {
          'plugins': [{
            'removeUnknownsAndDefaults': true
          }]
        }
      }
    }
  }
};