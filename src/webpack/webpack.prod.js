const { merge } = require("webpack-merge");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const env = process.env.NODE_ENV || "development";
const webpackConfig = require("./webpack.config.js")(env);

module.exports = merge(webpackConfig, {
  mode: env,
  plugins: [
    new CompressionPlugin({
      // gzip压缩配置
      test: /\.js$|\.html$|\.css/, // 匹配文件名
      threshold: 10240, // 对超过10kb的数据进行压缩
      deleteOriginalAssets: false, // 是否删除原文件
    }),
    new CleanWebpackPlugin(), // 所要清理的文件夹名称
  ],
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true,
      //   sourceMap: true, // 是否启用文件缓存
      //   parallel: true, // 使用多进程并行运行来提高构建速度
      // }),
    ],
  },
});
