const gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  postcss = require("gulp-postcss"),
  posthtml = require("gulp-posthtml"),
  include = require("posthtml-include"),
  autoprefixer = require("autoprefixer"),
  minify = require("gulp-csso"),
  rename = require("gulp-rename"),
  babel = require("gulp-babel"),
  concat = require("gulp-concat"),
  del = require("del"),
  uglify = require("gulp-uglify"),
  server = browserSync.create(),
  terser = require("gulp-terser");

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
    .src("app/js/index.js", { sourcemaps: true })
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(concat("concat.js"))
    .pipe(babel())
    .pipe(terser())
    .pipe(rename("index.min.js"))
    .pipe(gulp.dest(paths.scripts.dest));
}

function copy() {
  return gulp
    .src(
      [
        "app/fonts/**/*.{woff,woff2}",
        "app/images/**",
        "app/js/*.json",
        "app/js/particles.min.js"
      ],
      {
        base: "app"
      }
    )
    .pipe(gulp.dest("build/"));
}

function build(done) {
  style();
  html();
  scripts();
  copy();
  done();
}

function start() {
  server.init({
    server: {
      baseDir: "./build/"
    }
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.html.src, html).on("change", reload);
  gulp.watch(paths.scripts.src, scripts).on("change", reload);
}

function publish() {
  return gulp.src("build/**").pipe(gulp.dest("./"));
}

exports.start = start;
exports.clean = clean;
exports.build = build;
exports.publish = publish;
