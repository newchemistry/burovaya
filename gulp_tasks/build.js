module.exports = function(gulp, plugins) {
  return function() {
    var buildCss = gulp.src('app/css/*.css')
      .pipe(gulp.dest('public_html/css'));

    var buildFonts = gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('public_html/fonts'));

    var buildJs = gulp.src('app/js/*.js')
      .pipe(gulp.dest('public_html/js'));

    var buildHtml = gulp.src('app/*.html')
      .pipe(gulp.dest('public_html'));

    var buildImg = gulp.src('app/img/**/*')
      .pipe(gulp.dest('public_html/img'));

    var buildVideo = gulp.src('app/video/*')
      .pipe(gulp.dest('public_html/video'));
  };
};