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
  };
};

exports.HtmlWebpackPlugins = () => {
  console.log(htmlPluginParams)
  return htmlPluginParams.map((param) => {
    return new HtmlWebpackPlugin({
      title: param.title,
      filename: param.filename,
      template: param.template,
      chunks: param.chunks,
    });
  });
};
