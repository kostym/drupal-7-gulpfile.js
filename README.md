# Kostym boilerplate gulpfile for Drupal 7

## Setup

### Get the code

1. Clone this repo in to your drupal theme and rename it to `gulpfile.js`
  <pre>git clone git@github.com:kostym/drupal-7-gulpfile.js.git gulpfile.js</pre>

2. Copy the `gulpfile.config.js` to theme folder so it's in the same folder as `gulpfile.js`

3. Change the configuration file `gulpfile.config.js` to match your needs.

### Install requirements


###Tasks

* watch
* clean
* compile
* default

#### JS only

* js-watch
* js-clean
* js-compile

#### SVG only

* svg-watch
* svg-clean
* svg-compile

####CSS only

* css-watch
* css-clean
* css-compile

###flags

`--prod`

## Settings

###### gulpfile.config.js
```javascript
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
```
## Example drupal theme
<pre>
. example-drupal-theme
├── README.md
├── dist
├── gulpfile.config.js
├── gulpfile.js
│   ├── index.js
│   ├── css
│   │   ├── css-error.png
│   │   ├── css.js
│   │   └── css.png
│   ├── js
│   │   ├── js-error.png
│   │   ├── js.js
│   │   └── js.png
│   └── svg
│       ├── svg.js
│       └── svg.png
├── images
│   └── svg
│       └── icons
├── kostym_components
├── logo.png
├── node_modules
├── onion.info
├── package.json
├── screenshot.png
├── scss
│   └── onion.scss
└── template.php
</pre>
## eslint


## Recommendations

Use drupal module link_css to enable broswesync to inject css.

Include eslint and csscomb setting files in gulp repo
