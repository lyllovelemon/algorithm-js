学习nextTick原理，你能回答下列问题:
+ 什么情况下使用nextTick
+ 为什么某些方法依赖数据修改后的DOM变化需要在nextTick后执行
+ 为什么nextTick是在下一个tick执行完毕后执行
+ nextTick的触发是在什么时候

查看src/core/util/next-Tick.js(version:2.6.11)
```javascript
let timerFunc

/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else {
  // Fallback to setTimeout.
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}
```
1. 判断是否支持原生promise
2. 不支持就判断是否支持原生MutationObserver
3. 不支持就判断是否支持原生setImmediate
4. 否则调用setTimeout(..., 0)

nextTick函数的实现:
1. 把传入参数cb压入callback数组，判断useMacroTask的值，为真则执行
宏任务函数，否则执行微任务函数
2. 它们都会在下一次tick时执行flushcallbacks函数
3. flushcallbacks函数就是对callbacks进行遍历，依次执行每项的函数
```javascript
const callbacks = []
let pending = false

function flushCallbacks () {
  pending = false
  const copies = callbacks.slice(0)//浅拷贝callbacks
  callbacks.length = 0//将callbacks长度重置为0
  //遍历copies,逐个执行方法
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}

```
这里使用 callbacks 而不是直接在 nextTick 中执行回调函数的原因是
保证在同一个 tick 内多次执行 nextTick，不会开启多个异步任务，而把这些异步任务都压成一个同步任务，在下一个 tick 执行完毕。
## 什么时候使用nextTick
[nextTick](https://cn.vuejs.org/v2/api/#vm-nextTick)在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM


