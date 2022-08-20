/* eslint-disable */
const { merge } = require("webpack-merge");
const CommonConfig = require("./webpack.common.js");
const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
// const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require("webpack");

module.exports = merge(CommonConfig, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("assets"),
    publicPath: "/assets/",
  },
  devtool: "inline-source-map",
  plugins: [
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:8080",
        files: ["_site", "_src"],
      },
      {
        reload: false,
      }
    ),
    new webpack.HotModuleReplacementPlugin(),
    // new ESLintPlugin({extensions : 'js'}),
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       enforce: "pre",
  //       exclude: /node_modules/,
  //       loader: "eslint-loader",
  //     },
  //   ],
  // },
  devServer: {
    contentBase: [path.resolve("_site")],
    hot: true,
  },
});
