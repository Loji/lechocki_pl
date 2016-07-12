var gulp = require('gulp');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');


gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(prefixer({browsers: ['> 1%', 'IE 7'], cascade: false}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'))
});

// function that gets all js files into one, big that will get minified and cached. You need to manually input js files here
gulp.task('js', function() {
	gulp.src([
		'node_modules/animejs/anime.js',
		'js_src/browser_detect.js',
		'js_src/main.js',
	])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js/'))
});

gulp.task('js-production', function() {

});

gulp.task('production', function(cb) {
		gulp.src([
			'node_modules/animejs/anime.js',
			'js_src/browser_detect.js',
			'js_src/main.js',
		]).pipe(concat('main.js'))
			.pipe(uglify())
			.pipe(gulp.dest('js/'))
     pump([
       gulp.src('sass/**/*.scss'),
       sass({ outputStyle: 'compressed' }),
       prefixer({browsers: ['> 1%', 'IE 7'], cascade: false}),
       gulp.dest('css')
     ], cb);
});


gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
		gulp.watch('js_src/**/*.js', ['js']);

})
