var gulp = require('gulp');
var sass = require('gulp-sass');
var rimraf = require('gulp-rimraf');
gulp.task('clear-styles', function() {
    gulp.src('./css/' + '/*', {read: false})
        .pipe(rimraf());
});
gulp.task('styles', ['clear-styles'], function() {
    gulp.src('dist/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('dist/**/*.scss',['styles']);
});
