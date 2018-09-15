module.exports = function(gulp, plugins) {
  return function() {
    gulp.src([
        'app/libs/animate.css/animate.min.css',
        'app/libs/bootstrap/dist/css/bootstrap.min.css'
      ])
      .pipe(plugins.concat('csslibs.min.css'))
      .pipe(plugins.cssnano())
      .pipe(gulp.dest('app/css'))
      .pipe(plugins.browserSync.reload({
        stream: true
      }));
  };
};