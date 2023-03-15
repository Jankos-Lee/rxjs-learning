console.log("coming in operator.js");

import {
  from,
  fromEvent,
  audit,
  interval,
  pipe,
  map,
  buffer,
  concat,
  range,
  merge,
  filter,
} from "rxjs";

// from 将对象转为可观察对象
const obArr = from([1, 2, 3, 4]);

// from([1, 2, 3, 4]).subscribe((x) => console.log(x));

// audit: audit is similar to throttle
// const clicks = fromEvent(document, "click");
// const result = clicks.pipe(audit((ev) => {
//     console.log(ev)
//     return interval(3000)
// }));
// result.subscribe((x) => console.log(x));

/**
 * interval
 */
// interval(1000).subscribe(n => console.log(n))

// const numbers = interval(1000);
// numbers.pipe(
//     map(x => {
//         console.log('mapped x: ',x)
//         return x
//     })
// ).subscribe(x => console.log(x))

/**
 * buffer
 */
// const clicks = fromEvent(document, 'click');
// const intervalEvents = interval(1000);
// const buffered = intervalEvents.pipe(buffer(clicks));
// buffered.subscribe(x => console.log(x));

/**
 * range
 * range(start: number, count?: number, scheduler?: SchedulerLike): Observable<number>
 */

// const numbers = range(5, 3);

// numbers.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Complete!')
// });

/**
 * concat
 * concat(...args: any[]): Observable<unknown>
 */

// concat(range(1, 5), range(6, 5)).subscribe(console.log);

/**
 * merge
 * merge(...args: (number | SchedulerLike | ObservableInput<unknown>)[]): Observable<unknown>
 */
// const result = merge([],[1,2,3],[4,6,7]).subscribe(x => console.log(x));
// console.log(result)

// const result = range(1, 10).pipe(map((x) => 10 * x));
// console.log(from(result).subscribe(x => console.log(x)));

export default {};
