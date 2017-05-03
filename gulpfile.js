var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');

var paths = {
    scss: './assets/sass/*.scss'
};

gulp.task('sass', function () {
    return gulp.src(paths.scss)
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(gulp.dest('.'));
});
