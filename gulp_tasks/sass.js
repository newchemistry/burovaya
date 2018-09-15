module.exports = function(gulp, plugins) {
  return function() {
    gulp.src('app/sass/**/*.sass')
      .pipe(plugins.plumber())
      .pipe(plugins.sass())
      .pipe(plugins.autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
        cascade: true
      }))
      .pipe(gulp.dest('app/css'))
      .pipe(plugins.browserSync.reload({
        stream: true
      }));

  };
};