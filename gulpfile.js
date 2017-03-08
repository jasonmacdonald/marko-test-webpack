/**
 * Created by Jason MacDonald on 1/31/2017.
 */
'use strict';
let gulp = require('gulp');
let gutil = require('gulp-util')
let webpack = require('webpack');
let config = require('./webpack.config');

gulp.task('webpack', function(done){
    webpack(config).run(onBuild(done));
});

function onBuild(done) {
    return function(err, stats) {
        if (err) {
            gutil.log('Error', err);
            if (done) {
                done();
            }
        } else {
            Object.keys(stats.compilation.assets).forEach(function(key) {
                gutil.log('Webpack: output ', gutil.colors.green(key));
            });
            gutil.log('Webpack: ', gutil.colors.blue('finished ', stats.compilation.name));
            if (done) {
                done();
            }
        }
    }
}
