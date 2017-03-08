/**
 * Created by Jason MacDonald on 1/31/2017.
 */
'use strict';
let path = require('path');
let fs = require('fs');
let webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        index: ['./index.js']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js', // string
        publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /\.marko|\.html/,
                use: [
                    "marko-loader"
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: '[name].css'})
    ]
}