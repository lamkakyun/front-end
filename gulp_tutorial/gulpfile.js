const gulp = require('gulp');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

let paths = {
    scripts: ['js/index.js', 'js/main.js'],
    css_scripts: ['css/index.css', 'css/main.css'],
};

// build a task
gulp.task('jshint', function() {
    return gulp.src(paths.scripts).pipe(jshint()).pipe(jshint.reporter('default'));
});

// minify only
gulp.task('minifycss', function() {
    return gulp.src(paths.css_scripts).pipe(rename({suffix: '.min'})).pipe(cleanCSS({compatibility: 'ie7'})).pipe(gulp.dest('dist/css'))
});

// minify and merge
// create a full js on 'js' directory and build a minifyjs on 'dist' directory
gulp.task('minifyjs', function() {
    return gulp.src(paths.scripts).pipe(concat('all.js')).pipe(gulp.dest('js')).pipe(rename({suffix: '.min'})).pipe(uglify()).pipe(gulp.dest('dist/js'));
});

// default task, will autorun when you input 'gulp'
gulp.task('default', ['jshint'], function() {
    gulp.start('minifycss', 'minifyjs');
});

