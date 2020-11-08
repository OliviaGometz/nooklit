var gulp = require("gulp"),
    sass = require("gulp-sass"),
    wait = require("gulp-wait2"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");

var paths = {
    styles: {
        src: "sass/**/*.scss",
        dest: "."
    }
};

function style() {
    return (
        gulp
            .src(paths.styles.src)
            .pipe(sourcemaps.init())
            .pipe(wait(200))
            .pipe(sass())
            .on('error', sass.logError)
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.styles.dest))
    );
}

function watch() {
    gulp.watch(paths.styles.src, style);
}

exports.style = style;
exports.watch = watch;
