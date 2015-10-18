var path = require("path");
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, "src");

module.exports = {
    entry: './src',
    output: {
        path: 'builds',
        filename: 'bundle.js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: 'builds/',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'main', // Move dependencies to our main file
            children: true, // Look for common dependencies in all children,
            minChunks: 2, // How many times a dependency must come up before being extracted
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                include: SRC_PATH,
            },
            {
                test: /\.scss/,
                loader: 'style!css!sass'
            },
            {
                test: /\.html/,
                loader: 'html'
            }
        ],
    }
};
