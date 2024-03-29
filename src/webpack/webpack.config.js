const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 获取所有入口文件配置 和 多页 html 插件
const { entries, HtmlWebpackPlugins } = require("./webpack.common");

module.exports = (env) => ({
  mode: env,
  devtool: false, // 关闭 source map 警告⚠️
  entry: entries(),
  output: {
    path: path.resolve(__dirname, "../../../rxjs/dist"),
    filename: "bundle.[name].js",
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "主页",
      filename: "index.html",
      template: "./src/index.html",
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true, // 压缩内联css
      },
    }),
    ...HtmlWebpackPlugins(),
    new webpack.SourceMapDevToolPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
});
