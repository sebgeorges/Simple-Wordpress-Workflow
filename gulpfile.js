var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    livereload = require('gulp-livereload');
    uglify = require('gulp-uglify');
    ;

var jsSources = [];
var cssSources =[];

//if you need to change the location of your source files, do it here
var jsFilesPath = 'development/js/';
var cssFilesPath = 'development/css/';

//add your javascripts files below

var jsFiles = [
    'example.js',
    'example2.js',
    'example3.js'
];

//add your css files below

var cssFiles = [
    'style.css',
    'style2.css'
];



for (i=0; i< jsFiles.length; i++){
    
    jsSources[i]= jsFilesPath +jsFiles[i];
}

for (i=0; i< cssFiles.length; i++){
    
    cssSources[i]= cssFilesPath +cssFiles[i];
}


var htmlSources = [
    './**/*.php'  
];


gulp.task('js', function(){
    gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js'))
    .pipe(livereload());
    
});


gulp.task('minify-js', function(){

function minifyJs(){
    gulp.src('js/script.js')
    .pipe(uglify('script.js'))
    .pipe(gulp.dest('js'))
}
    setTimeout(minifyJs,1000);
    
});


gulp.task('cssconcat', function(){
    gulp.src(cssSources)
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
    
});



gulp.task('minify-css', function() {
    

function minifyCss(){    
  return gulp.src('./style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./'))
}
   
    setTimeout(minifyCss,500);
    
});


gulp.task('html', function(){
    gulp.src(htmlSources)
    .pipe(livereload())
});


gulp.task('watch', function(){ 
    livereload.listen();
   gulp.watch(cssSources,['sortcss'])
    gulp.watch(jsSources,['sortjs'])
    gulp.watch(htmlSources,['html'])
 
});



//group css and js tasks together
gulp.task('sortcss',['cssconcat','minify-css']);

gulp.task('sortjs',['js','minify-js'])


//set up default gulp command
gulp.task('default',['html','sortcss','sortjs','watch']);




