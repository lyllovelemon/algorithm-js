# 创建对象的设计模式

## 工厂模式
```
function createPerson(){
    let o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function(){
        console.log(this.name);
    };
    return o;
}
let person1=createPerson("lemon",22,"front-web developer");
let person2=createPerson("fd",25,'teacher');

```
>工厂模式解决了创建多个相似对象的问题，但没有解决对象识别的问题。

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
