'use strict';

const path               = require('path');
const webpack            = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer       = require('autoprefixer');
const argv               = require('yargs').argv;

const isProd = argv['mode']   == 'production';
const API    = argv['api']    || 'https://ob.b2c.dev.maxus.lan/api/v1';
const APIKEY = argv['apikey'] || 'https://ob.b2c.dev.maxus.lan/apikey';
const WIDGET = argv['widget'] || 'http://localhost:8000';

let config = {

    context: path.resolve(__dirname, 'client'),

    entry: {
        app: './app',
        loader: './loader'
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: isProd ? '/widget/' : '/',
        filename: 'js/[name].js',
    },

    resolve: {
        root: path.resolve(__dirname, 'client'),
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /bower_components/],
                loader: 'ng-annotate!babel?presets[]=es2015'
            },
            {
                test: /\.html$/,
                loader: 'html?config=htmlLoaderConfig'
            },
            {
                test: /\.less$/,
                loader: isProd
                    ? ExtractTextPlugin.extract('style', 'css?-discardDuplicates!postcss!less')
                    : 'style!css?-discardDuplicates!postcss!less',
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                exclude: [/fonts/],
                loader:'file',
                query: {
                    name: isProd ? 'img/[name].[ext]' : 'img/[name].[ext]?[hash]',
                    publicPath: isProd ? '/widget/' : '/'
                }
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)(\?.*$|$)/,
                exclude: [/img/],
                loader:'file',
                query: {
                    name: isProd ? 'fonts/[name].[ext]' : 'fonts/[name].[ext]?[hash]',
                    publicPath: isProd ? '/widget/' : '/'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['app'],
            template: './index.html'
        }),
        new webpack.DefinePlugin({
        })
    ],

    postcss: function() {
        return [autoprefixer];
    },

    htmlLoaderConfig: {
        root: path.resolve(__dirname, 'cpa'),
        minimize: false,
        interpolate: true
    }
};

if (!isProd) {
    config.entry.app = ['webpack-dev-server/client?http://localhost:8000/', 'webpack/hot/dev-server', './app'];
    config.devtool = 'inline-cheap-module-source-map';
    config.devServer = {
        port: 8000,
        hot: true
    };
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (isProd) {
    config.plugins.push(
        new ExtractTextPlugin('css/[name].[contenthash].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new CleanWebpackPlugin(['build'])
    )
}

module.exports = config;
