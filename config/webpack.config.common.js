const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const distDir = path.resolve(__dirname, '..', 'dist');

module.exports = {
  // module
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use:
        {
          loader: 'file-loader',
          options: { name: 'fonts/[name].[ext]' },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([distDir], {
      root: path.resolve(__dirname, '..'),
      verbose: true,
      dry: false,
    }),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'public/index.html',
    }),
    new StyleLintPlugin({
      confFile: './.stylelintrc',
      context: 'src',
      files: '**/*.css',
      failOnError: false,
      quiet: false,
    }),
  ],
  output: {
    path: distDir,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
};
