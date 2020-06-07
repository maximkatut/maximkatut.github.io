const path = require('path');
const merge = require('webpack-merge');
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: `development`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `public`)
  },
  devtool: `source-map`,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
});
