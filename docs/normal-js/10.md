# AOP
## 概念
AOP（Aspect Oriented Programming）为面向切面编程,通过预编译方式和运行期动态代理实现程序
功能的统一维护的一种技术。AOP是OOP的延续，可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度
降低，提高程序的可复用性，同时提高了开发效率。

## 功能
+ 日志记录
+ 性能统计
+ 安全控制
+ 事务处理
+ 异常处理

## 作用
将日志记录，性能统计，安全控制，事务处理，异常处理等代码从业务逻辑代码中划分出来，通过对这些行为的
分离，我们希望它可以独立到非业务逻辑代码中去，进而改变这些行为时不影响业务逻辑代码的执行。
> 请慎重在js中使用AOP，因为部分js方法是异步的，必要时使用ES7的async/await/promise

## AOP在js中的实现
1. js中AOP的实现原理主要依靠Function的两个函数:apply和call

apply:
```javascript
function foo(a,b,c) {
  console.log('log',a,b,c)
};
let log=['debug','print','write'];
foo.apply(this,log);
```
call:
```javascript
function foo(a,b,c) {
  console.log('log',a,b,c);
}
foo.call(this,'debug','print','write');
```
>推荐使用apply，因为call函数的参数不够灵活，在写法上参数无法灵活伸缩，
apply的可扩展性和性能更好。

2. before、after、around
在Java的Spring框架中有before(前置通知),after(后置通知)、around(环绕通知)。
这三种通知同样可以在js中实现。
```javascript
/**
 * 给方法加入前置切片函数
 * 可以在执行方法之前执行一些操作,
 * 前置切片的返回值为false时，不影响原方法的执行
 * @param func {Function} 被前置执行的函数
 * @return {Function} 加入前置通知的函数
 */
Function.prototype._before=function(func) {
  let self=this;
  return function() {
    func.apply(self,arguments);
    return self.apply(self,arguments);
  }
}
function a() {
  console.log('hello,a');
}
a=a._before(function() {
  console.log('before');
})
a();
```
输出结果为before;hello,a

```javascript
/**
 * 给方法加入后置切片函数
 * 可以在执行方法之之后执行一些操作
 * 后置切片的返回值为false时，不影响原方法的执行
 * @param func {Function} 被后置执行的函数
 * @return {Function} 加入后置通知的函数
 * @constructor
 */
Function.prototype._after=function(func) {
  let self=this;
  return function() {
    let ret=self.apply(self,arguments);
    func.apply(self,arguments);
    return ret;
  }
}
function b() {
 console.log('oops,b'); 
}
b=b._after(function() {
  console.log('later');
})
b();
```
输出结果为oops,b;later

### around
在around函数中，引入了一个JoinPoint对象，JoinPoint对象封装了目标函数和目标函数的参数。
在调用JoinPoint对象的invoke函数时，会去调用原来的目标函数。在调用invoke时，如果需要改变目标函数的this对象，需要将对象传入到invoke的参数中。around函数，可以在目标函数的前面和后面随意加入逻辑代码，也可以根据条件判断是否执行目标函数。
```javascript
/**
 * 切入点对象
 * 不允许切入对象多次调用
 * @param obj   对象
 * @param args  参数
 * @constructor
 */
function JoinPoint(obj,args) {
  let isApply=false;//是否执行目标函数
  let result=null;//保存目标函数的执行结果
  this.source=obj;//目标函数对象
  this.args=args;//目标函数对象传入的参数
   /**
       * 目标函数的代理执行函数
       * 如果被调用过，不能重复调用
       * @return {object} 目标函数的返回结果
       */
   this.invoke=function(e) {
     if(isApply){return;}
     isApply=true;
     result=this.source.apply(e||this.source,this.args);
     return result;
   };
   //获取目标函数执行结果
   this.getResult=function() {
     return result;
   }
}
/**
 * 方法环绕通知
 * 原方法的执行需在环绕通知方法中执行
 * @param func {Function} 环绕通知的函数
 *     程序会往func中传入一个JoinPoint(切入点)对象, 在适当的时机
 *     执行JoinPoint对象的invoke函数，调用目标函数
 * 
 * @return {Function} 切入环绕通知后的函数，
 */
Function.prototype._around=function(func) {
  let self=this;
  return function() {
    let args=[new JoinPoint(self,arguments)];
    return func.apply(this,args);
  }
}

let isAdmin=true;
function c() {
  console.log('show me your code');
}
c=c._around(function(joinpoint) {
  if(isAdmin){
  	console.log('is admin');
  	joinpoint.invoke(this);
  }
})
c();
// 结果
// if isAdmin == true
//     is admin
//     show me your code
// if isAdmin == false
//     
```
