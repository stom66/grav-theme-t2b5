var gulp         = require('gulp');
var sass         = require('gulp-dart-sass');
var cleancss     = require('gulp-clean-css');
var csscomb      = require('gulp-csscomb');
var rename       = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');

// configure the paths
var sass_watch_dir = './src/scss/**/*.scss';
var sass_src_dir   = './src/scss/*.scss';
var js_watch_dir   = './src/js/**/*.js';
var dest_dir       = './dist';

var paths = {
    source: sass_src_dir
};

function watch() {
  return gulp.watch([sass_watch_dir, js_watch_dir], build);
}

function build() {
  return gulp.src(paths.source)
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer())
      .pipe(gulp.dest(dest_dir))
      .pipe(csscomb())
      .pipe(cleancss({
        inline: ['none']
      }))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest(dest_dir)), 
    gulp.src(['src/js/*.js'])
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist'))
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist'));
}

exports.watch = watch;
exports.build = build;
exports.default = build;
