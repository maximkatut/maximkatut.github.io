const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const postcss = require("gulp-postcss");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const autoprefixer = require("autoprefixer");
const minify = require("gulp-csso");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const del = require("del");
const uglify = require("gulp-uglify");
const server = browserSync.create();

const paths = {
  scripts: {
    src: "app/js/*.js",
    dest: "build/js/"
  },
  styles: {
    src: "./app/scss/**/*.scss",
    dest: "./build/css/"
  },
  html: {
    src: "./app/*.html",
    dest: "./build/"
  }
};

function reload() {
  server.reload();
}

const clean = () => del(["build"]);

function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.stream());
}

function html() {
  return gulp
    .src("app/*.html")
    .pipe(posthtml([include()]))
    .pipe(gulp.dest("build"));
}

function scripts() {
  return gulp
    .src(paths.scripts.src, { sourcemaps: true })
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("index.min.js"))
    .pipe(gulp.dest(paths.scripts.dest));
}

function copy() {
  return gulp.src([
    "app/fonts/**/*.{woff,woff2}",
    "app/images/**"
  ], {
    base: "app"
  })
  .pipe(gulp.dest("build"));
}

function build(done) {
  clean();
  style();
  html();
  scripts();
  copy();
  done();
}

function start() {
  server.init({
    server: {
      baseDir: "build/"
    }
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.html.src, html).on("change", reload);
  gulp.watch(paths.scripts.src, scripts).on("change", reload);
}

exports.start = start;
exports.clean = clean;
exports.build = build;
