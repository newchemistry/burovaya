module.exports = function(gulp, plugins) {
  return function() {
    gulp.src([ // Берем все необходимые библиотеки
        'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
        'app/libs/bootstrap/dist/js/bootstrap.min.js',
        'app/libs/tweenMax.js/tweenMax.min.js',
        'app/libs/TimelineMax.js/TimelineMax.min.js',
        'app/libs/baron/baron.js'

      ])
      .pipe(plugins.concat('libs.min.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest('app/js'))
      .pipe(plugins.browserSync.reload({
        stream: true
      }));
  };
};