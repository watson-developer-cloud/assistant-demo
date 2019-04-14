const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.config.common');

const distDir = path.resolve(__dirname, '..', 'dist');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = merge.smart(common, {
  entry: [
    './src/index.js',
  ],

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin([distDir], {
      root: path.resolve(__dirname, '..'),
      verbose: true,
      dry: false,
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: { ecma: 8 },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    extractSass,
  ],
});
