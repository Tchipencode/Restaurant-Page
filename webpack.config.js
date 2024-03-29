const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
  entry: {
   index: './src/index.js',
   pageLoad: './src/pageLoad.js',
   pageMenu: './src/pageMenu.js',
  },
  devtool: 'inline-source-map',
  devServer: {
   static: './dist',
 },
  plugins: [
   new HtmlWebpackPlugin({
     template: './src/index.html',
     inject: 'body',
   }),
 ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
   runtimeChunk: 'single',
  },
  module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
   ],
 },
};