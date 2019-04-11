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

## 构造函数模式
```
function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function(){
        console.log(this.name);
    }
}
let person1=new Person("lemon",22,"front-web-developer");
let person2=new Person("lyl",23,"teacher");
```
>构造函数应以大写字母开头，非构造函数以小写字母开头。

```
    console.log(person1.constructor==Person)//true
    console.log(person2.constructor==Person)//true
```
person1和person2分别保存Person的不同实例，这两个对象都有一个constructor（构造函数）属性，该属性指向Person。
>检测对象应使用instanceof操作符

```
console.log(person1.sayName==person2.sayName)//false
```
以构造函数方式创建函数，会导致不同的作用域链和标识符解析，可以把函数定义转移到构造函数外部来解决问题。
```
function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=sayName;
}
function sayName(){
    console.log(this.name);
}
let person1=new Person("lemon",22,"front-web-developer");
let person2=new Person("lyl",23,"teacher");
```
