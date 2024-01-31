const webpack = require('webpack');
const commonWebpackConfig = require('./webpack.common.js');
const path = require('path');

module.exports = {
    ...commonWebpackConfig,
    entry: [
        '@babel/polyfill',
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'js/puro_puro_bundle.[name].js',
        chunkFilename: 'js/puro_puro_chunk.[name].js',
    },
    mode: 'development',
    devtool: 'source-map',
    watchOptions: {
        ignored: [
            '**/node_modules',
            '**/assets/**'
        ],
        followSymlinks: true,
        aggregateTimeout: 200,
    },
    devServer: {
        historyApiFallback: true,
        port: 13337,
        hot: true,
    },
    plugins: [
        ...commonWebpackConfig.plugins,
    ]
};