'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {

    entry: {
        app: './client/bootstrap.js',
        vendor: ['angular', 'angular-ui-router']
    },

    output: {
        path:     __dirname + '/build',
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
                loader: 'ng-annotate!babel-loader?presets[]=es2015'
            }
        ]
    }
};

module.exports = options;
