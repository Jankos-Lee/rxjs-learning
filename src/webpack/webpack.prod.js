const { merge } = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = process.env.NODE_ENV || "development";
const webpackConfig = require("./webpack.dev.js")(env);

module.exports = merge(webpackConfig, {
  mode: env,
  plugins: [
    // new CleanWebpackPlugin(), // 所要清理的文件夹名称
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
    ],
  },
});
