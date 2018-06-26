module.exports = function (config) {
    config.set({
        plugins: [
            require('karma-babel-preprocessor'),
            require('karma-chrome-launcher'),
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('karma-safari-launcher'),
            require('karma-spec-reporter')
        ],
        preprocessors: {
            'src/components/*.spec.js': ['babel']
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },
        files: [
            'dist/app.js',
            'dist/*.bundle.js',
            'node_modules/babel-polyfill/dist/polyfill.js', // fix PhantomJS: "undefined is not a function (evaluating 'Object.assign(...)"
            'node_modules/angular-mocks/angular-mocks.js',
            'src/components/*.spec.js'
        ],
        frameworks: [
            'jasmine'
        ],
        reporters: [
            'spec'
        ],
        specReporter: {
            maxLogLines: 5,
            suppressErrorSummary: true,
            suppressFailed: false,
            suppressPassed: false,
            suppressSkipped: false,
            showSpecTiming: true,
            failFast: false
        },
        logLevel: config.LOG_DEBUG,
        singleRun: false,
        failOnEmptyTestSuite: true,
        client: {
            captureConsole: false
        }
    });
};