var del = require("del");
var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var utilities = require("gulp-util");
var buildProduction = utilities.env.production;
var jshint = require("gulp-jshint");

gulp.task("clean", function(){
  return del(["build", "tmp"]);
});

gulp.task("concatInterface", function(){
  return gulp.src(["./JS/*-userinterface.js"])
  .pipe(concat("allConcat.js"))
  .pipe(gulp.dest("./tmp"));
});

gulp.task("jsBrowserify",["concatInterface"],function(){
  return browserify({ entries: ["./tmp/allConcat.js"] })
  .bundle()
  .pipe(source("app.js"))
  .pipe(gulp.dest("./build/js"));
});

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
  .pipe(uglify())
  .pipe(gulp.dest("./build/js"));
});

gulp.task("build",["clean"], function(){
  if (buildProduction) {
    gulp.start("minifyScripts");
  } else {
    gulp.start("jsBrowserify");
  }
});

gulp.task("jshint", function(){
  return gulp.src(["JS/*.js"])
  .pipe(jshint())
  .pipe(jshint.reporter("default"));
});

gulp.task("greetings", function(){
  console.log("Alllloooo!!");
});
