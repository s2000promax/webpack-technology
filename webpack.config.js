const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  //mode: 'production',

 // entry: './src/index.js',
  entry: {
    main: './index.js',
    analytics: './analytics.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLwebpackPlugin({
      //title: 'Webpack App by Stan', //For dynamic create index.html without template
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
  ]
}