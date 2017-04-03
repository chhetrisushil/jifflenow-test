/*
 * webpack.config.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
var path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    // 'babel-polyfill',
    './src/js/main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src/js'),
      loader: 'babel-loader',
      query: {
        plugins: ['transform-regenerator', 'transform-runtime'],
        presets: ['es2015', 'stage-0']
      }
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: "css-loader"
      })
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: "style.css"
    })
  ]
};
