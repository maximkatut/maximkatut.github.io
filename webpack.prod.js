const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCSSExtarctPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "bundle.[contentHash].js",
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCSSExtarctPlugin({
      filename: "[name].[contentHash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtarctPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
    ]
  }
});