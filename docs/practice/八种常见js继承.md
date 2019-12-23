# 八种常见js继承
## 原型链继承
### 实现
构造函数、原型和实例的关系:每个构造函数都有一个原型对象，原型对象有一个指向构造函数的指针，而实例
有一个指向原型对象的内部指针。
```javascript
function superType() {
  this.property=true;
}
superType.prototype.getProperty=function() {
  return this.property;
}
function subType() {
  this.subProperty=false;
}
subType.prototype=new superType();
subType.prototype.getSubProperty=function() {
  return this.subProperty;
}
var instance=new subType();
console.log(instance.getProperty())
```
### 缺点
原型链继承对引用类型值的操作会被篡改.
```javascript
function parent() {
  this.color=['red','blue','green']
}
function child(){	}
child.prototype=new parent();

var instance=new child();
instance.color.push('black');
console.log(instance.color);//'red','blue','green','black'

var instance1=new child();
console.log(instance1.color);//'red','blue','green','black'
```
## 借用构造函数继承
```javascript
function superType() {
  this.colors=['red','blue','green']
}
function subType() {
  superType.call(this);
}
var instance1=new subType();
instance1.colors.push('black');
console.log(instance1);//'red','blue','green','black'

var instance2=new subType();
console.log(instance2);//'red','blue','green'
```

### 缺点
+ 只能实现父类属性和方法的继承，不能实现原型属性和方法的继承
+ 复用性差，每个子类都有父类函数的副本，影响性能
## 组合继承
```javascript
function superType(name) {
  this.name=name;
  this.colors=['red','blue','green'];
}
superType.prototype.getName=function() {
  return this.name;
}
function subType(name,age) {
  superType.call(this,name);
  this.age=age;
}
subType.prototype=new superType();//第一次调用superType()
subType.prototype.constructor=subType;//重写SubType.prototype的constructor属性，指向自己的构造函数SubType
subType.prototype.getAge=function() {
 return this.age; 
}

var instance1=new subType('lemon',22);
instance1.colors.push('black');
console.log(instance1.colors);//'red','blue','green','black'
instance1.getName();//"lemon"
instance1.getAge();//22

var instance2=new subType('yuki',30)
console.log(instance2.colors);//'red','blue','green'
instance2.getName();//"yuki"
instance2.getAge();//30
```
### 缺点
+ 第一次调用superType(),给subType.prototype写入两个属性name,color;
+ 第二次调用superType()，给instance1写入两个属性name,color,原型中存在两份相同的属性和方法

## 原型式继承
利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型
```javascript
function object(obj) {
  function F() {}
   F.prototype=obj;
  return new F()
}
var person={
	name:'lemon',
	friends:['yuki','sakura']
}
var anthorPerson=object(person);
anthorPerson.name='Iris';
anthorPerson.friends.push('cat');

var thirdPerson=object(person);
thirdPerson.name='jojo';
thirdPerson.friends.push('Linda');

console.log(person.friends);//'yuki','sakura','cat','Linda'
```
### 缺点
+ 原型式继承多个实例引用类型属性指向相同，存在篡改可能
+ 无法传递参数
## 寄生式继承
核心：在原型式继承的基础上，增强对象，返回构造函数
```javascript
function createAnthor(obj) {
  var clone=Object(obj);
  clone.sayHi=function() {
    console.log('hi')
  }
  return clone;
}

var person={
	name:'lemon',
	age:22
};
var anthorPerson=createAnthor(person);
console.log(anthorPerson.sayHi());//'hi'
```
### 缺点
+ 寄生式继承原型链继承多个实例的引用类型属性指向相同，存在篡改可能
+ 无法传递参数

## 寄生组合式继承
```javascript
    function inheritPrototype(subType,superType) {
      var prototype=Object.create(superType.prototype);//创建对象，创建父类的一个副本
      prototype.constructor=subType;//增强对象，弥补因重写原型而失去的默认的constructor 属性
      subType.prototype=prototype;//指定对象，将新创建的对象赋值给子类的原型
    }
    function superType(name) {
      this.name=name;
      this.colors=['red','blue','green'];
    }
    superType.prototype.getName=function() {
      console.log(this.name);
    }
    
    function subType(name,age) {
      superType.call(this.name);
      this.age=age;
    }
    inheritPrototype(subType,superType)
    
    subType.prototype.sayAge=function() {
      console.log(this.age);
    }
    
    var instance1=new subType('lemon',22);
    var instance2=new subType('lyl',23);
    
    instance1.colors.push('yellow');//'red','blue','green','yellow'
    instance2.colors.push('1')//'red','blue','green','1'
```
这个例子的高效率体现在它只调用了一次SuperType 构造函数，并且因此避免了在SubType.prototype 上创建不必要的、多余的属性。于此同时，原型链还能保持不变；因此，还能够正常使用instanceof 和isPrototypeOf()
这是最成熟的方法，也是现在库实现的方法

## ES6 extends实现
```javascript
class Parent {
  constructor(width,height){
  	this.width=width;
  	this.height=height;
  }
  get area(){
  	return this.calcArea()
  }
  calcArea(){
  	return this.width*this.height
  }
}
const A=new Parent(10,20);
console.log(A.area);//200

class Child extends Parent{
  constructor(length){
  	super(length,length);// 如果子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
  	this.name='square'
  }
  get area(){
  	return this.width*this.height
  }
}
const B=new Child(10);
console.log(B.area);//100
```