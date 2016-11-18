const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, 'client'),

    entry: {
        app: './app'
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },

    resolve: {
        root: path.resolve(__dirname, 'client'),
        // modulesDirectories: ['client', 'web_modules', 'node_modules'],
        // extensions: ['', 'js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'ng-annotate!babel?presets[]=es2015'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                exclude: /fonts/,
                loader: 'file'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
