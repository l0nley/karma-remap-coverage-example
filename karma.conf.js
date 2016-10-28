var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['progress', 'coverage', 'remap-coverage'],
        coverageReporter: { type: 'in-memory' },
        remapCoverageReporter: { html: './coverage' },
        port: 9876,
        //logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['PhantomJS2'],
        singleRun: true,
        autoWatchBatchDelay: 300,
        files: [
            'src/core.ts',
            'src/**/*.spec.ts'
        ],

        preprocessors: {
            'src/**/*.spec.ts': ['webpack'],
            'src/core.ts': ['webpack', 'coverage']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        }
    });
};