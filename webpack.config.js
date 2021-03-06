const webpack = require('webpack');
const path = require('path');

var config = {
    entry: [
        './app/app.js'
    ],
    output: {
        filename: 'dist/out.js',
        path: __dirname
    },
    mode: 'development',
    resolve: {
        extensions: ['.js']
    }
};  

module.exports = config;