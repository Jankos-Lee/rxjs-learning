// RXJS 学习

// import observables from "./rxjs.demo/observable.param.object";

// import observableParamCb from "./rxjs.demo/observable.param.cb";

// import operator from "./rxjs.demo/operator";

console.log("入口文件加载共享资源");
console.log("RXJS service is now running on 9000");

const observerBtn = document.getElementById("observer");
const testBtn = document.getElementById("test");

if (observerBtn)
  observerBtn.onclick = () => {
    console.log(window);
    const originUrl = window.origin;
    window.location.href = `${originUrl}/observer.html`;
  };

if (testBtn) {
  testBtn.onclick = () => {
    console.log(window);
    const originUrl = window.origin;
    window.location.href = `${originUrl}/test.html`;
  };
}
