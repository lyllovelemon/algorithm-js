# 继承
OO语言支持两种继承方式：接口继承和实现继承，Javascript只支持实现继承，其实现继承主要是通过原型链实现的。
## 原型链

构造函数、原型链和实例的关系:每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。

实现原型链：
```
function Father(){
   this.property=true;
}
Father.prototype.getProperty=function(){
    return this.property;
}
function Son(){
    this.subProperty=false;
}

Son.prototype=new Father();

Son.prototype.getSubProperty=function(){
    return this.subProperty;
}
let instance=new Son();
console.log(instance.getProperty())//true
```
>查找规则:如果试图引用对象的某属性，首先会在对象中查找该属性，找不到才会再对象的原型中查找该属性。
```
constructor1.prototype=instance;
```
搜索轨迹:instance1- instance1._ proto _(instance2) -instance2. _proto _ -...-Object.prototype
>搜索轨迹类似于一条长链，称为原型链
