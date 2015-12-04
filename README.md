# Kostym gulp boilerplate for Drupal 7

* [What is included?](#what-is-included)
	* [JS](#js)
	* [CSS](#css)
	* [SVG](#svg)
	* [General](#general)
* [Getting Started](#getting-started)
	* [Dependencies](#dependencies) 
	* [Quick setup](#quick-setup)
* [Gulp tasks](#gulp-tasks)
	* [Prod flag]()
	* [JS specific](#js-specific)
	* [CSS specific](#css-specific)
	* [SVG specific](#svg-specific)
* [Recommendation](#recommendation)
	* [Browsersync CSS injection](#browsersync-css-injection)
	* [Airbnb eslint](#airbnb-eslint)

## What is included?
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

3. Same with `default.package.json`, copy and rename.
	<pre>$ cp gulpfile.js/default.package.json package.json </pre>
	**Note:** If you already have a package.json you need to merge them manually.
4. Install all npm packages
	<pre>$ npm install</pre>

5. Last, change the configuration in your copied `gulpfile.config.js` to match your needs.
6. Done! Now you should be able to run any [gulp task](#gulp-tasks).

## Gulp tasks

Run a task: `gulp [TaskGoesHere]`

* **default** *Recommended* - First runs the compile task then the watch task.
* **watch** - Compiles and sync when a file is saved.
* **clean** - Delete generated files
* **compile** - Compile files


#### Prod flag
To speed up the compiling when developing, some parts of the build, minifying for example, runs only when using the `--prod` flag.
Run a task with flag: `gulp [TaskGoesHere] --prod`

#### JS specific
* js-watch
* js-clean
* js-compile

####CSS specific
* css-watch
* css-clean
* css-compile

#### SVG specific
* svg-watch
* svg-clean
* svg-compile


## Recommendation
### Browsersync CSS injection
For the Browsersync CSS injection to work in Drupal 7, we need to include CSS files using the \<link> element instead of @import. You can achieve this by download and enable the [Link CSS](https://www.drupal.org/project/link_css) module.

### Airbnb eslint
There are a lot of Javascript style guides out there. One that we like and recommend is [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript). We extend there [eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and make it Drupal 7 friendly.

1. Install the linter
<pre>$ npm install --save-dev eslint-config-airbnb eslint</pre>
2. Copy and rename the `default.eslintrc` into your theme folder, so it's in the same folder as `gulpfile.js`
	<pre>$ cp gulpfile.js/default.eslintrc .eslintrc</pre>
3. Done! The gulpfile will now lint your JS.
