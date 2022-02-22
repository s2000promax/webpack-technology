const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  //mode: 'production',

 // entry: './src/index.js',
  entry: {
    main: './src/index.js',
    analytics: './src/analytics.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLwebpackPlugin({
      //title: 'Webpack App by Stan', //For dynamic create index.html without template
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
  ]
}