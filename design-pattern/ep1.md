# 单例模式
## 概念
>保证一个类仅有一个实例,并提供一个访问它的全局访问点

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
console.log(a===b);
```