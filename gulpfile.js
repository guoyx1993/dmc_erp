var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');

    gulp.task('less',function(){
    	return gulp.src('app/css/style.less')
    	           .pipe(less())
    	           .pipe(gulp.dest('app/css'))
                   .pipe(browserSync.reload({
                        stream:true
                   }))
    })

    gulp.task('browserSync',function(){
    	browserSync({
    		server:{
    			baseDir:'app'
    		},
    	})
    })

    gulp.task('watch',['less','browserSync'],function(){
    	gulp.watch('app/css/*.less',['less']);
    	gulp.watch('app/js/**/*.js',browserSync.reload);
    	gulp.watch('app/**/*.html',browserSync.reload);
    })