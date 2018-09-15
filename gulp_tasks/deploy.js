module.exports = function(gulp, plugins) {
  return function() {

    var conn = plugins.vinylFtp.create({
      host: 'nyanmya.beget.tech',
      user: 'nyanmya_bur',
      password: 'Y&Aa1xd8',
      parallel: 10
    });

    var globs = [
      'public_html/img/**',
      'public_html/css/**',
      'public_html/js/**',
      'public_html/fonts/**',
      'public_html/video/**',
      'public_html/*.html'
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    gulp.src(globs, {
        base: '.',
        buffer: false
      })
      .pipe(conn.newer('.')) // only upload newer files
      .pipe(conn.dest('.'));

  }
};