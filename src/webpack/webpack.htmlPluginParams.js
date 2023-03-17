exports.htmlPluginParams = [
  {
    title: "可观察对象",
    filename: "observer.html",
    template: "./src/html/observer.html",
    chunks: ["observable"],
  },
  {
    title: "测试页面",
    filename: "test.html",
    template: "./src/html/test.html",
    chunks: ["test"],
  },
  {
    title: "Operator 操作符",
    filename: "operators.html",
    template: "./src/html/operators.html",
    chunks: ["operators"],
  },
  {
    title: "VirtualDom Demo",
    filename: "virtualDom.html",
    template: "./src/html/virtualDom.html",
    chunks: ["virtualDom"],
  },
];
