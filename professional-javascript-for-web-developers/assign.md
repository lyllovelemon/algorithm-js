# 深浅拷贝
深浅拷贝的区别在于其在内存中的存储类型不同。

堆和栈：
栈是自动分配的内存空间，它由系统自动释放；而堆是动态分配的内存，大小不定也不会自动释放。

基本数据类型:symobol,null,undefined,number,boolean,string
引用数据类型:object(array 和function)

基本数据类型存放在栈中，是按值存放的，可以直接访问;
```javascript
let a=1;
let b=1;
console.log(a===b);//true
```
基本类型的比较是值的比较，只要它们值相等那么它们就是相等的。

引用数据类型存放在堆中，变量实际是一个存放在栈内存的指针，这个指针指向堆内存中的地址，每个空间大小不一样，要根据情况进行特定的分配。
```javascript
let a=[1,2,3];
let b=[1,2,3];
console.log(a===b);//false
```
引用数据类型的比较是看其引用是否指向同一个对象。虽然a,b的内容相同，但是在内存中的地址不一样，也就是说a和b指向的不是同一个对象，所以它们是不相等的。

浅拷贝：B复制A,B变A也变

深拷贝：B复制A，B变A不变
## 浅拷贝
浅拷贝只复制一层对象的属性，不包括对象里面为引用类型的属性。
如果源对象的某个属性值是对象，那么目标对象拷贝得到的只是这个对象的引用。
```javascript
let obj1={
	'name':'sakura',
    'age':'18',
    'language':[1,[2,3],[4,5]]
};
let obj2=obj1;
let obj3=shallowCopy(obj1);
function shallowCopy(src) {
    let dst={};
    for(let prop in src){
    	if(src.hasOwnProperty(prop)){
    		dst[prop]=src[prop]
        }
    }
    return dst;
}
obj2.name='yuki';
obj3.age='20';

obj2.language[1]=['二','三'];
obj3.language[2]=['四','五'];

console.log(obj1);
/**
* obj1={
  	'name':'yuki',
     'age':'18',
     'language':[1,['二','三'],['四','五']]
  }
* **/

console.log(obj2);

/**
* obj2={
  	'name':'yuki',
     'age':'18',
     'language':[1,['二','三'],['四','五']]
  }
* **/

console.log(obj3);
/**
* obj3={
     'name':'sakura',
     'age':'20',
     'language':[1,['二','三'],['四','五']]
     }
* **/
```

浅拷贝方法:
+ '='赋值
+ Object.assign()
+ slice()
+ concat()
+ jQuery的$.extend({},obj)

## 深拷贝
深拷贝复制对象的属性，也复制对象里面为引用类型的属性。

深拷贝方法:
+ JSON.parse(JSON.stringfy())
+ Object.create()
+ jquery的$.extend(true,{},...)
+ 递归拷贝
>注意:JSON.parse(JSON.stringfy())只适用于number,string,boolean,array和扁平对象,即JSON能展示的数据类型，
RegExp对象不能使用这种方式

## 给类添加属性
我们可以使用 Object.assign()给类添加属性
```javascript
 //ES5 写法
    class Rectangle{
    	constructor(width,height){
    		this.width=width;
    		this.height=height;
        }
    }
    //ES6 写法
    class Rectangle{
    	constructor(width,height){
    		Object.assign(this,{width,height});
        }
    }
```
## 给构造函数批量添加方法
传统的ES5面向对象，我们一般把方法挂载在构造函数的原型上，需要一个一个在原型上添加方法
```javascript
function Dog(name) {
  this.name=name;
}
Dog.prototype.say=()=> {
  return 'say something...';
}
Dog.prototype.bark=()=>{
	return 'wow wow';
}
```
使用Object.assign()可以一次性批量添加
```javascript
Object.assign(Dog.prototype,{
	say(){
		return 'say something...';
	},
	bark(){
		return 'wow wow';
	}
})
```
## 局限性
Object.assign():
1. 只能拷贝对象可枚举的自身类型；
2. 无法拷贝属性的特性；
3. 访问器属性会被转换成数据属性；
4. 无法拷贝源对象的原型