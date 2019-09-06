# 宏任务和微任务

## 同步 VS 异步
同步指一个事件完成后才执行下一个事件。
异步指不等一个事件执行完成就执行下一个事件。

## 宏任务和微任务区别
以银行办业务为例，一个柜员同时只接待一个办业务的客户，每一个来办业务的人可以看作宏任务，下一个客户为下一个宏任务。
你在办业务的同时，比如需要办存款业务，可能还会办理贷款业务，这些其他的需求可以看作微任务。
当前的微任务在结束前，是不会执行下一个宏任务的。
```ecmascript 6
setTimeout(_ => console.log(4))

new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
})

console.log(2)

```
setTimeout为宏任务,Promise.then则是典型的微任务。
## 宏任务
宏任务必然是在微任务之后才执行的（微任务实际上是宏任务的其中一个步骤）
浏览器：
+ I/O
+ setTimeout
+ setInterval
+ setImmediate
+ requestAnimationFrame

Node:
+ I/O
+ setTimeout
+ setInterval
+ setImmediate

I/O包括很多方面，比如鼠标点击click、文件上传、DOM修改
## 微任务
浏览器：
+ MutationObserver
+ Promise then catch finally

Node:
+ process.nextTick
+ Promise then catch finally

