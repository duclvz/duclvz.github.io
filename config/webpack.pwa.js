/* eslint-disable */
const { merge } = require("webpack-merge");
const ProdConfig = require("./webpack.prod.js");
const path = require("path");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = merge(ProdConfig, {
  mode: "production",
  plugins: [
    new WebpackPwaManifest({
      name: "duclvz's Blog",
      short_name: "duclvz",
      description: "duclvz's blog",
      orientation: "portrait",
      display: "standalone",
      start_url: "/",
      background_color: "#fff",
      icons: [
        {
          src: path.resolve("_images/logo.png"),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
});
