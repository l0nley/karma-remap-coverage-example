var gulp = require('gulp');
var webpack = require('webpack-stream');
var karma = require('karma').Server;
var webpackConfig = require('./webpack.config.js');

gulp.task('build', function() {
    return gulp.src('src/core.ts')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/'));
});

gulp.task('test', function(done) {
    karma.start({
        configFile: __dirname+ '/karma.conf.js'
    }, function() {
        done();
    });
});

gulp.task('default', ['build']);