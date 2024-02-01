const commonWebpackConfig = require('./webpack.common.js');
const path = require('path');

module.exports = {
    ...commonWebpackConfig,
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'js/portfolio_bundle.[id].js',
        chunkFilename: 'js/portfolio_chunk[name].[contenthash].js',
        clean: true,
    },
    stats: {
        all: false,
        assets: true,
        assetsSort: "!size",
        errors: true,
        builtAt: false,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },
};
