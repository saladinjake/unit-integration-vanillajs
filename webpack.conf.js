'use strict';

var path = require('path');
var cwd = __dirname;

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './static/app.js',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  colors: true,
  devtool: 'source-map',
};
