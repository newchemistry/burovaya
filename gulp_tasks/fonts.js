module.exports = function(gulp, plugins) {
  return function() {
    gulp.src('app/fonts/**/*.css')
      .pipe(plugins.concatCss('fonts.min.css', {
        commonBase: './app/'
      }))
      .pipe(plugins.modifyCssUrls({
        modify: function(url, filePath) {
          return '/' + url;
        }
      }))
      .pipe(gulp.dest('app/css'))
      .pipe(plugins.browserSync.reload({
        stream: true
      }));
  };
};