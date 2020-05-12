const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

process.env.NODE_ENV = 'dev'

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, './lib'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.conf$/,
        loader: path.resolve('lib'),
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
};