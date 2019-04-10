# 对象

## 概念
对象是一组无序属性的集合，其属性包含基本值、对象或函数，可映射为数据结构的散列表

### 创建对象
创建一个自定义对象最简单的方式是创建一个Object的实例，然后为它添加属性和方法。
```
  let person=new Object();
     person.name='lemon';
     person.age='22';
     person.job='front-web developer';
     person.sayName=function () {
         console.log(this.name);
     }
```
对象字面量是创建对象的另一种方法。
```
let person={
name:'lemon',
age:'22',
job:'front-web developer',

sayName:function(){
console.log(this.name);
}
}
```

### 属性类型
1.数据属性
数据属性包含一个数据值的位置，在这个位置可以读取和写入值，共有4个描述其行为的特性。

[[Configurable]]:表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性，默认值为true

[[Enumerable]]:表示能否通过for-in循环返回属性，默认值为true

[[Writable]]:能否修改属性的值，默认值为true

[[Value]]:包含这个属性的数据值，读取属性时，从这个位置读；写入属性时，把新值保存在这个位置，默认值为undefined

2.访问器属性

## 作者


