const webpack = require('webpack');
const path = require('path');
const tsconfig = './tsconfig.json';

var config = {
    entry: [
        './app.ts'
    ],
    output: {
        filename: 'main.js',
        path: __dirname
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    logInfoToStdOut: true,
                    logLevel: 'info',
                    configFile: tsconfig,
                    compilerOptions: {
                        noEmit: false
                    }
                }
            }
        ]
    }
};  

module.exports = config;