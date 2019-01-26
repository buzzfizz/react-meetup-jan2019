// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type {webpack.Configuration}
 */
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'script.[hash].js'
    },
    devServer: {
        port: 9200
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};