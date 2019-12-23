# 单例模式
## 概念
> 保证一个类仅有一个实例,并提供一个访问它的全局访问点

## 实现单例模式
方法一：
```ecmascript 6
let Singleton=function(name) {
  this.name=name;
  this.instance=null;
}
Singleton.prototype.getName=function() {
  console.log(this.name);
}
Singleton.getInstance=function(name) {
  if(!this.instance){
  	this.instance=new Singleton(name);
  }
  return this.instance;
}
let a=Singleton.getInstance('a');
let b=Singleton.getInstance('b');
console.log(a===b);//true
```
这段单例模式的代码意义不大，我们可以进行优化。

## 透明的单例模式
我们将使用CreateDiv单例类，在页面中创建唯一的div节点。
```
let createDiv=(function(){
  let instance;
  let createDiv=function(html){
    if(instance){
      return  instance;
    }
    this.html=html;
    this.init();
    return instance=this;
  };
  createDiv.prototype.init=function(){
    let div=document.createElement('div');
    div.innerHTML=this.html;
    document.body.appendChild(div);
  };
  return createDiv;
})()
```
虽然完成了一个透明的单例类的编写，但它存在许多缺点。

为了封装instance，我们使用了自执行的匿名函数和闭包，并让这个匿名函数返回了真的Singleton构造方法，这增加了一些程序的复杂度，可读性不好。

假如我们需要利用这个类在页面中创建数百个数千个div，即把这个类从单例类变成一个普通的产生多个实例的类，我们必须改写createDiv函数，把控制创建唯一对象的那一段去掉，这样修改会产生不必要的麻烦。

## 用代理实现单例模式
```
let createDiv=function(html){
  this.html=html;
  this.init();
};
createDiv.prototype.init=function(){
  let div=document.createElement('div');
  div.innerHTML=this.html;
  document.body.appendChild(div);
};
//引入代理
let proxySingletonCreateDiv=(function(){
  let instance;
  return function(html){
    if(!instance){
      instance=new createDiv(html);
    }
    return instance;
  }
})()

let a=new proxySingletonCreateDiv('a');
let b=new proxySingletonCreateDiv('b');
console.log(a===b);
```
我们把负责管理单例的逻辑移到了代理类proxySingletonCreateDiv中，这样createDiv 就变成了一个普通的类，它跟 proxySingletonCreateDiv 组合起来可以达到单例模式的效果.

## 局限性
JavaScript是一门无类型语言，单例模式一般是无意义的。但是单例模式的核心是确保只有一个实例并且可以全局访问。全局变量满足第二点，当没有变量冲突时满足第一点。所以可以看作单例模式。

全局变量容易造成命名空间污染。

以下几种方式可以减轻污染。
1. 使用命名空间
最简单的方式是使用对象字面量的形式
```
let namespace={
  a:function(){
    console.log(1);
  }
  b:function(){
    alert(2);
  }
}
```
我们还可以动态创建命名空间
```
let myApp={};
myApp.namespace=function(name){
 let parts=name.split('.');
 let current=myApp;
 for(let i in parts){
   if(!current[parts[i]]){
     current[parts[i]]={};
   }
   current=current[parts[i]];
 }
}
myApp.namespace('event');
myApp.namespace('dom.style');
console.dir(myApp);
```
等价于
```
let myApp={
  event:{},
  dom:{
    style:{}
  }
}
```

2. 使用闭包封装私有变量

## 惰性单例
惰性单例在实际开发中非常有用，实际上开头就用过。instance只有我们调用Singleton.getInstnce的时候才被创建，而不是页面加载好就创建

## 答案
1.
```
//true
```
2.
```
//true
```