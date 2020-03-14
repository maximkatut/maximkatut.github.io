const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const del = require("del");
const uglify = require("gulp-uglify");
const server = browserSync.create();

const paths = {
  scripts: {
    src: "app/js/*.js",
    dest: "dist/js/"
  },
  styles: {
    src: "./app/scss/**/*.scss",
    dest: "./app/css/"
  },
  html: {
    src: "./app/*.html"
  },
  build: {
    scripts: {
      src: "app/js/*.js",
      dest: "dist/js"
    }
  }
};

const clean = () => del(["dist"]);

function reload() {
  server.reload();
}

function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.stream());
}

function start() {
  server.init({
    server: {
      baseDir: "app"
    }
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.html.src).on("change", reload);
  gulp.watch(paths.scripts.src).on("change", reload);
}

function scripts() {
  return gulp
    .src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("index.min.js"))
    .pipe(gulp.dest(paths.scripts.dest));
}

function build() {}

exports.style = style;
exports.scripts = scripts;
exports.start = start;
exports.clean = clean;
