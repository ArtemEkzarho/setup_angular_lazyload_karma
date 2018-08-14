const merge = require('webpack-merge');
const dev = require('./webpack.dev.config.js');

module.exports = merge(dev, {
    entry: {
        app: './src/app.unit.js'
    },
});