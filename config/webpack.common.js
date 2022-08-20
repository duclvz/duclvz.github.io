/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InlineChunkHtmlPlugin = require('./InlineChunkHtmlPlugin.js');
const { ESBuildPlugin } = require('esbuild-loader');

module.exports = {
  mode: 'production',
  entry: ['./_src/index.js'],
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './_images/logo.png',
      publicPath: '/',
      outputPath: '.',
    }),
    new HtmlWebpackPlugin({
      template: './_src/default.html',
      filename: '../_layouts/default.html',
      minify: false,
    }),
    new MiniCssExtractPlugin({}),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/.+[.](js|css)$/]),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve('_images'),
          to: 'images/',
        },
      ],
    }),
    new ESBuildPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'esbuild-loader',
          options: {
            target: 'es5',
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                parser: 'postcss-scss',
                plugins: ['postcss-import', 'autoprefixer'],
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
};
