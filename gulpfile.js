/* gulpfile.js */
var 
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer');

// source and distribution folder
var
    source = 'src/',
    dest = 'dist/';
    
// Bootstrap scss source
var bootstrap = {
        in: './node_modules/bootstrap/'
    };

// Custom Javascript
var js = {
	in: source + 'js/*',
	out: dest + 'js/',
	watch: source + 'js/*'
}

// Our scss source folder: .scss files
var scss = {
    in: source + 'scss/main.scss',
    out: dest + 'css/',
    outName: 'styles.min.css',
    watch: source + 'scss/**/*',
    sassOpts: {
        outputStyle: 'compressed',
        precison: 3,
        includePaths: [bootstrap.in + 'scss']
    }
};

// compile scss
gulp.task('sass', function() {
    return gulp.src(scss.in)
        .pipe(sass(scss.sassOpts))
        .on('error', gutil.log)
        .pipe(autoprefixer())
        .pipe(rename(scss.outName))
        .pipe(gulp.dest(scss.out));
});

// uglify javascript
gulp.task('uglify', function() {
  	return gulp.src(js.in)
  		.pipe(concat('styles.min.js'))
    	.pipe(uglify())
    	.pipe(gulp.dest(js.out));
});

// default task
gulp.task('default', ['sass', 'uglify'], function() {
     gulp.watch(scss.watch, ['sass']);
     gulp.watch(js.watch, ['uglify']);
});