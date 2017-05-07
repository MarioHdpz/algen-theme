var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();


gulp.task('sass', function () {
    return gulp.src(['style.scss'],{ base: '.' })
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(cssmin())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('.'))
        .pipe(browserSync.stream());
});

gulp.task('watch',function() {
    browserSync.init({
        proxy: "http://calentadoresalgen.com",
        host: "calentadoresalgen.com",
        open: "external"
    });
    gulp.watch('style.scss',['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
})