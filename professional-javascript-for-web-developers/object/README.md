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
#### 数据属性
数据属性包含一个数据值的位置，在这个位置可以读取和写入值，共有4个描述其行为的特性。

[[Configurable]]:表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性，默认值为true

[[Enumerable]]:表示能否通过for-in循环返回属性，默认值为true

[[Writable]]:能否修改属性的值，默认值为true

[[Value]]:包含这个属性的数据值，读取属性时，从这个位置读；写入属性时，把新值保存在这个位置，默认值为undefined

>要修改属性默认的特性，必须使用ECMAscript5的Object.defineProperty()方法，这个方法接收3个参数：属性所在的对象、属性名和一个描述符对象，描述符对象为上述4个属性中的一个或多个值

例如
```
let person={};
Object.defineProperty(person,'name',{
writable:false,
value:'lyl'
})
console.log(peron.name)//'lyl'
person.name='lemon';
console.log(person.name)//'lyl'
```
>请不要在IE8中使用Object.defineProperty()方法

#### 访问器属性

访问器属性不包含数据值，它们包含一对getter和setter函数，读取访问器属性调用getter函数，写入访问器属性调用setter函数，访问器属性有如下4个特性

[[Configurable]]:表示能否通过delete删除属性从而重新定义属性，默认值为true

[[Enumerable]]:表示能否通过for-in循环返回属性，对于直接在对象上定义的属性，默认值为true

[[Get]]:在读取属性时调用的函数，默认为undefined

[[Set]]:在写入属性时调用的函数，默认为undefined

```
 let book={
        _year:2018,
        edition:1
    }
    Object.defineProperty(book,'year',{
        get:function(){
            return this._year;
        },
        set:function(newVal){
            if(newVal>2018){
                this._year=newVal;
                this.edition +=newVal-2018;
            }
        }
    })
    book.year=2019;
    console.log(book.edition)//2
```

_year前面下划线是一种常用记号，表示只能通过对象方法访问的属性。

不一定要同时指定getter和setter，只指定getter表明属性不可写，只指定setter表明属性不可读。

### 定义多个属性

使用Object.defineProperties()方法，IE9以上版本支持
```$xslt
let book={};
Object.defineProperties(book,{
    _year:{
        writable:true,
        value:2018
    },
    edition:{
        writable:true,
        value:1
    },
    year:{
        get:function(){
            return this._year;
        }
        
        set:function(newVal){
            if(newVal>2018){
                this._year=newVal;
                this.edition+=newVal-2018;
            }
        }
    }
})
```


