// 操作符
import { of, from } from "rxjs";

// of: 将参数列表作为数据流返回。
// of("a", "b", [], {}, true, 20).subscribe(v => console.log(v))

// from: 将 Array，Promise, Iterator 转换为 observable 对象。
from(["a", "b", "c"]).subscribe((v) => console.log(v));

function p() {
  return new Promise((resolve) => {
    resolve([100, 200]);
  });
}

from(p()).subscribe((x) => console.log(x));

export default {};
