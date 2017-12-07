const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config.common.js');

module.exports = merge.smart(common, {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index.js',
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } },
        ],
      },
    ],
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
