'use strict';

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {

    entry: {
        app: ['bootstrap.js'],
        vendor: [
            'angular', 'angular-ui-router', 'oclazyload'
        ]
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js'
    },

    resolve: {
        root: path.join(__dirname, 'client')
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            title: 'Angular + Webpack',
            template: 'client/index.html'
        })
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

module.exports = config;
