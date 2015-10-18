var path = require("path");

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, "src");

module.exports = {
    entry: './src',
    output: {
        path: 'builds',
        filename: 'bundle.js',
    },
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
