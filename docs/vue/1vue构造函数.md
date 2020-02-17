# vue的构造函数
vue的核心代码在core/index.js中，打开这个文件。
```javascript
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

initGlobalAPI(Vue)//将引入的vue作为参数，调用初始化全局api函数

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})//定义只读变量$isServer，绑定到vue的原型

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})//定义只读变脸$ssrContext,绑定到vue的原型

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'//定义vue的版本

export default Vue//导出vue的实例

```
打开instance/index.js
```javascript
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
//非生产环境且this不在vue的原型链上，抛出警告信息
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
//初始化options
  this._init(options)
}
/**
* 将vue作为参数分别调initMixin，stateMixin、eventsMixin、lifecycleMixin、renderMixin五个方法
**/

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue//导出vue实例
```
## 为什么在策略函数中判断是否存在vm就能知道mergeOptions是在实例化时调用(使用new操作符走_init方法)还是继承时调用(Vue.extend)
```javascript
// _init 方法中调用 mergeOptions 函数，第三个参数是 Vue 实例
vm.$options = mergeOptions(
  resolveConstructorOptions(vm.constructor),
  options || {},
  vm
)
```
策略函数中的vm来自于mergeOptions的第三个参数vm，当调用mergeOptions方法不传第三个参数时，策略函数就拿不到vm参数。mergeOptions除了_init调用，
还有一种可能就是通过Vue.extend()调用，打开core/global-api/extend.js
```javascript
Sub.options = mergeOptions(
  Super.options,
  extendOptions
)
```
这个方法没有传第三个参数，因此拿不到vm。所以，只要_init()方法没传第三个参数，就拿不到vm。
## vue中的data为什么是函数，而不是对象
该问题涉及到数据类型的存放地址，js包括基本数据类型和引用数据类型，
基本数据类型存放在栈中，引用数据类型存放在堆中，而且存放的是地址。
如果一个vue文件有多个子组件接收同一个变量，改变一个子组件内此变量的值，就会影响到其他子组件
中该变量的值，data之所以是函数，是因为函数拥有作用域，其中一个子组件的变量更改不会影响其他子组件
的该变量。

inject/props初始化优先于data初始化，参考代码instance/init.js第55到62行
