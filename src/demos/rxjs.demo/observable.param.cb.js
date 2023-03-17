// 当创建的可观察对象实例订阅时，入参对象为回调函数时

import { Observable } from 'rxjs';

const foo = new Observable((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
});

foo.subscribe((x) => {
  console.log(x);
});
foo.subscribe((y) => {
  console.log(y);
});

export default {};