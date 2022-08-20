/* eslint-disable */
const { merge } = require("webpack-merge");

const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CommonConfig = require("./webpack.common.js");

module.exports = merge(CommonConfig, {
  mode: "production",
  output: {
    filename: "[name]-[hash].bundle.js",
    path: path.resolve("assets"),
    publicPath: "/assets/",
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          // Images larger than 10 KB won’t be inlined
          limit: 10 * 1024
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          // Images larger than 10 KB won’t be inlined
          limit: 10 * 1024,
          // Remove quotes around the encoded URL –
          // they’re rarely useful
          noquotes: true,
        }
      },
    ]
  }
});
