const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                /* convert sass to css using sass-loader, then handle imports using css-loader, then inject tags using style-loader
                 and benfit HMR reloads, note that the order is important and it start from right to left  (css-loader: handles @import and URL resolution.)*/
                use: ['style-loader', 'css-loader' , 'sass-loader']
            },
            {
                test: /\.jpe?g|png|svg$/i,
                loader: 'url-loader',
                options: {
                    limit: 30720 /* (8192=8KB) (1MB = 1,048,576), (1kb=1024) */,
                    name: '[hash]-[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ],
    devServer: {/*
        port: 5000,
        proxy: {
          '/test': 'http://localhost:3000', // Proxy to your Express backend
        }*/
    }
}
