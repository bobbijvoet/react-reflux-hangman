var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

function compile(watch) {
  var bundler = watchify(browserify('./src/main.jsx', { debug: true, verbose:true }).transform(babel), {verbose: true});
 
  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'))
      .pipe(livereload({ start: true }));
  }
 
  if (watch) {
    bundler.on('update', function() {
      rebundle();
    });
  }
 
  rebundle();
}
 
function watch() {
  return compile(true);
}
 
gulp.task('build', compile);
gulp.task('watch', watch);


gulp.task('connect', function() {
  connect.server({
    root: 'build'
  });
});


gulp.task('default', ['watch', 'connect']);
