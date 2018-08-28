const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('dotenv').config();

const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: 'public/index.html',
  filename: './index.html'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundled.js',
    publicPath: '/',
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.PROXY_URL,
        secure: false
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=1000000',
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          context: '',
          publicPath: '/',
        }
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    new ExtractTextPlugin('[name].css'),
  ],
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },
  performance: { hints: false }
};
