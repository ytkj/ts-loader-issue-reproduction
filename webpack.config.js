const path = require('path');
const webpack = require('webpack');

const baseConfig = {
    entry: path.join(__dirname, 'index.ts'),
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    logLevel: 'warn'
                }
            }]
        }]
    }
};

module.exports = function webpackConfig(env) {
    return baseConfig;
};
