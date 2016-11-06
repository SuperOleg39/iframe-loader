'use strict';

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let options = {

    entry: {
        app: './client/bootstrap.js',
        vendor: ['angular']
    },

    output: {
        path: __dirname + '/build',
        filename: '[name].bundle.js'
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
                loader: 'ng-annotate!babel-loader?presets[]=es2015'
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    }
};

module.exports = options;
