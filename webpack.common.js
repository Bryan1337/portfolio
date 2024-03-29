const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const { ESBuildMinifyPlugin } = require('esbuild-loader');
const path = require('path');


module.exports = {
    entry: [
        '@babel/polyfill',
        './src/index.js',
    ],
    resolve: {
        extensions: [
            '.wasm',
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.json',
        ],
        fallback: {
            fs: false,
            crypto: false,
        },
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            Scripts: path.resolve(__dirname, 'src/scripts'),
            Assets: path.resolve(__dirname, 'src/assets'),
            Reducers: path.resolve(__dirname, 'src/__reducers'),
            Actions: path.resolve(__dirname, 'src/__actions'),
            Types: path.resolve(__dirname, 'src/__types'),
            Hooks: path.resolve(__dirname, 'src/hooks'),
            Classes: path.resolve(__dirname, 'src/classes'),
            Workers: path.resolve(__dirname, 'src/workers'),
        }
    },
    module: {
        rules: [
            {
                test: /\.worker\.(t|j)s$/,
                loader: "worker-loader",
            },
            {
                test: /\.(t|j)sx?$/,
                loader: 'esbuild-loader',
                exclude: /node_modules/,
                options: {
                    loader: 'tsx',
                },
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",                 // creates style nodes from JS strings
                    "css-loader",                   // translates CSS into CommonJS
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico|mp3)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new Dotenv(),
    ],
};
