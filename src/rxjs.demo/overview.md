* 可观察对象 ( Observable ) ：类比 Promise 对象，内部可以用于执行异步代码，通过调用内部提供的方法将异步代码执行的结果传递到可观察对象外部。

* 观察者 ( Observer )：类比 then 方法中的回调函数，用于接收可观察对象中传递出来数据。

* 订阅 ( subscribe )：类比 then 方法，通过订阅将可观察对象和观察者连接起来，当可观察对象发出数据时，订阅者可以接收到数据。