import { Observable } from "rxjs";


const observable = new Observable(function (observer) {
  setTimeout(function () {
    observer.next({
      name: "张三"
    })
  }, 2000)
})

const observer = {
  next: function (value) {
    console.log(value)
  }
}

observable.subscribe(observer)

export default {};
