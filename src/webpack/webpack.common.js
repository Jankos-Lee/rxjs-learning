const HtmlWebpackPlugin = require("html-webpack-plugin");
const { htmlPluginParams } = require("./webpack.htmlPluginParams") ;

exports.entries = () => {
  return {
    homePage: "./src/index.js",
    observable: {
      import: "./src/entries/observer.js",
      filename: "bundle/[name].js",
    },
    test: {
      import: "./src/entries/test.js",
      filename: "bundle/[name].js",
    },
    operators: {
      import: "./src/entries/operators.js",
      filename: "bundle/[name].js",
    },
    virtualDom: {
      import: "./src/entries/virtual.dom.entry.js",
      filename: "bundle/[name].js",
    }
  };
};

exports.HtmlWebpackPlugins = () => {
  return htmlPluginParams.map((param) => {
    return new HtmlWebpackPlugin({
      title: param.title,
      filename: param.filename,
      template: param.template,
      chunks: param.chunks,
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true, // 压缩内联css
      },
      inject: true, // script 标签位于 html 文件的 body 底部
    });
  });
};
