# 函数
## 定义
定义函数有两种方式:
+ 函数声明
+ 函数表达式

1. 函数声明
```ecmascript 6
function test(a,b) {
  
}
```
函数声明由function关键字、函数名、参数构成，函数声明的一重要特征是函数声明提升，
意思是在执行代码之前会读取函数声明。
```ecmascript 6
sayHi()
function sayHi() {
  console.log('hi');
}
```
2.函数表达式
```ecmascript 6
let hi=function(a,b){
    
}
```
这种情况下创建的函数叫匿名函数，因为function关键字后面没有标识符。而且必须先声明后使用，否则会报错。



