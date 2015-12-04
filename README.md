# Kostym Gulp boilerplate for Drupal 7

* [What is Supported?](#what-is-supported)
	* [JS](#js)
	* [CSS](#css)
	* [SVG](#svg)
	* [General](#general)
* [Getting Started](#getting-started)
	* [Dependencies](#dependencies) 
	* [Quick setup](#quick-setup)
	* [Browsersync CSS injection](#browsersync-css-injection)
* [Gulp tasks](#gulp-tasks)
	* [Prod flag]()
	* [JS specific](#js-specific)
	* [CSS specific](#css-specific)
	* [SVG specific](#svg-specific)

## What is Supported?
### JS
* **Linting** with [eslint](http://eslint.org/)
* **ES6 support**, with [babel](https://babeljs.io/)
* **Minify** with [UglifyJS](https://github.com/mishoo/UglifyJS)
* **Sourcemaps**

### CSS
* **Sass** compile with [libsass](https://github.com/sass/libsass)
* **Vendor prefixes** with [autoprefixer](https://github.com/postcss/autoprefixer)
* **Minify** with [clean-css](https://github.com/jakubpawlowicz/clean-css)
* **Globbing**
* **Base64 encode images**
* **Sourcemaps**

### SVG
* **Svgstore** with [gulp-svgstore](https://github.com/w0rm/gulp-svgstore)
* **Minify** with [SVGO](https://github.com/svg/svgo)

### General
* [Browsersync](http://www.browsersync.io/)

## Getting Started

### Dependencies
Make sure these are installed first.

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com) `sudo npm install -g gulp`

### Quick setup

1. Clone this repo into your drupal theme, and name it `gulpfile.js`
  <pre>
  $ cd path/to/your/drupal/theme/
  $ git clone git@github.com:kostym/drupal-7-gulpfile.js.git gulpfile.js
  </pre>

2. Copy and rename the `default.gulpfile.config.js` into your theme folder, so it's in the same folder as `gulpfile.js`
	<pre>$ cp gulpfile.js/default.gulpfile.config.js gulpfile.config.js</pre>

3. Same with `default.package.json`, copy and rename. <i>**Note:** If you already have a package.json you need to merge theme manually.</i>
	<pre>$ cp gulpfile.js/default.package.json package.json </pre>
	
4. Install all npm packages
	<pre>$ npm install</pre>

5. Last, change the configuration in your copied `gulpfile.config.js` to match your needs.

### Browsersync CSS injection
For the Browsersync CSS injection to work, we need to include CSS files using the \<link> element instead of @import. We recommend to download and enable the [Link CSS](https://www.drupal.org/project/link_css) module.

## Gulp tasks

Run a task: `gulp [TaskGoesHere]`

* watch *Compiles and sync when a file is saved.*
* clean *Delete generated files*
* compile *Compile files*
* default *Runs the compile task then watch*

#### Prod flag
To speed up the compiling when developing some parts of the build, minifying for example, is only runned when using the `--prod` flag.
Run a task with flag: `gulp [TaskGoesHere] --prod`

#### JS specific
* js-watch
* js-clean
* js-compile

#### SVG specific
* svg-watch
* svg-clean
* svg-compile

####CSS specific
* css-watch
* css-clean
* css-compile


