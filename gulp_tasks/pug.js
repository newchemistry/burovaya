module.exports = function(gulp, plugins) {
  return function buildHTML() {
    gulp.src('./app/pug/*.pug')
      .pipe(plugins.plumber())
      .pipe(plugins.pug({
        pretty: true,
        basedir: './app'
      }))
      .pipe(plugins.fileInclude({
        basepath: './app'
      }))
      .pipe(gulp.dest('./app'))
      .pipe(plugins.browserSync.reload({
        stream: true
      }));
  };
};