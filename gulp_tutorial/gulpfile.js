const gulp = require('gulp');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const minifyCSS = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const argv = require('yargs').argv;

let paths = {
    // scripts: ['js/index.js', 'js/main.js'],
    // css_scripts: ['css/main.css','css/index.css',],
    scripts: [],
    css_scripts: [],
};

// build a task
gulp.task('jshint', function() {
    return gulp.src(paths.scripts).pipe(jshint()).pipe(jshint.reporter('default'));
});

// minify only
// gulp.task('minifycss', function() {
//     return gulp.src(paths.css_scripts).pipe(rename({suffix: '.min'})).pipe(cleanCSS({compatibility: 'ie7'})).pipe(gulp.dest('dist/css'))
// });
gulp.task('minifycss', function() {
    //console.log(paths.css_scripts);
    return gulp.src(paths.css_scripts).
        pipe(minifyCSS()).
        pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9')).
        pipe(concat('style.min.css')).
        pipe(gulp.dest('dist/css'));
});

// minify and merge
// create a full js on 'js' directory and build a minifyjs on 'dist' directory
gulp.task('minifyjs', function() {
    return gulp.src(paths.scripts).pipe(concat('all.js')).pipe(gulp.dest('js')).pipe(rename({suffix: '.min'})).pipe(uglify()).pipe(gulp.dest('dist/js'));
});

// default task, will autorun when you input 'gulp'
gulp.task('default', ['jshint'], function() {

    if (!argv.js && !argv.css) 
    {
        console.log('usage: gulp --js=a.js,b.js --css=a.css,b.css')
        return false;
    }

    let js_arr = [];
    let css_arr = [];
    if (argv.js)
    {
        js_arr = argv.js.split(',');
        paths.scripts = [];
        for (js of js_arr)
        {
           paths.scripts.push('js/' + js);
        }
    }

    if (argv.css) {
        css_arr = argv.css.split(',');
//        console.log(css_arr);
        paths.css_scripts = [];
        for (css of css_arr)
        {
 //           console.log(css);
            paths.css_scripts.push('css/' + css);
        }
    }
//    console.log(paths); 
//    return false;

    gulp.start('minifycss', 'minifyjs');
});

