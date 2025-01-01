const path = require('path');
const webpack = require('webpack');
const htmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: false,
            // Write Logs to Console
            verbose: true,

            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new htmlWebPackPlugin({
            template: 'src/client/views/index.html',
            filename: './index.html'
        })
    ]
}