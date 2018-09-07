var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('browser-sync').create();

gulp.task('style', function() {
  return gulp.src("source/sass/style.scss")    
		.pipe(sass())
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task('serve', ['style'], function() {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ['style']);
  gulp.watch("source/*.html").on('change', server.reload);
});