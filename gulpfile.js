var gulp = require('gulp'), // Подключаем Gulp
  plugins = require('gulp-load-plugins')({
    pattern: '*'
  });


function getTask(task) {
  return require('./gulp_tasks/' + task)(gulp, plugins);
}

gulp.task('server', getTask('server'));
gulp.task('pug', getTask('pug'));
gulp.task('sass', getTask('sass'));
gulp.task('cssLibs', getTask('cssLibs'));
gulp.task('jsLibs', getTask('jsLibs'));
gulp.task('jsMain', getTask('jsMain'));
gulp.task('fonts', getTask('fonts'));
gulp.task('build', getTask('build'));
gulp.task('deploy', getTask('deploy'));
gulp.task('watch', ['server'], function() {
  gulp.watch('app/pug/**/*.pug', ['pug']);
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/js/src/*.js', ['jsMain']);

});

gulp.task('default', ['watch']);