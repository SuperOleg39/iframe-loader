'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {

    entry: {
        app: './client/bootstrap.js',
        vendor: ['angular']
    },

    output: {
        path:     __dirname + '/build/js',
        filename: 'app.bundle.js'
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Angular + Webpack',
            template: 'client/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    
    module: {
        loaders: [
            {
                test:   /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

module.exports = options;