"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function () {
  return gulp
    .src("./sass/**/*.scss")

    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./static"));
});

gulp.task("sass:watch", function () {
  gulp.watch("./sass/**/*.scss", gulp.parallel("sass"));
});

gulp.task("default", gulp.parallel("sass:watch"));
