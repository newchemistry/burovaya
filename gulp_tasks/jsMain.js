module.exports = function(gulp, plugins) {
  return function() {
    gulp.src('app/js/src/*.js')
      .pipe(plugins.concat('main.js'))
      .pipe(gulp.dest('app/js'))
      .pipe(plugins.browserSync.reload({
        stream: true
      }));

  };
};