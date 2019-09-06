# proxy
## 概念
在目标对象之前架设一层“拦截”，外界对该对象的访问，都要经过这一层拦截，因此提供了一种
机制，可以对外界的访问进行过滤和改写。
写法:
```javascript
let proxy=new proxy(target,handler);
```
new proxy()表示生成新的proxy实例,target参数表示要拦截的目标对象，可以是任何类型对象，包括原生数组，函数，甚至另一个代理。handler参数
也是一个对象，其属性是当执行一个操作时定义代理的行为的函数，也就是定义拦截行为。
```javascript
let obj={};
let proxyObj=new proxy(obj,{});
proxyObj.a=1;
proxyObj.fn=function() {
  console.log('test');
}
console.log(proxyObj.a);//1
console.log(obj.a)//1
console.log(proxyObj.fn())//test
```
> 注意：handler不能设置为null，会抛出一个错误—Cannot create proxy with a non-object as target or handler！

## proxy API
+ get():用于拦截某个属性的读取操作,接收三个参数，依次为目标对象、属性名和proxy实例本身,最后一个参数可选。
```javascript
let person={
	name:"张三"
};
let proxy=new proxy(person,{
	get:function(target,property){
		if(property in target){
			return target[property];
		}
		else{
			throw new ReferenceError("Property\""+property+"\"does not exist.")
		}
	}
})
proxy.name;//"张三"
proxy.age//抛出错误
```
+ set():set属性用来拦截某个属性的赋值操作，可以接收四个参数，依次为目标对象，
属性名，属性值和proxy实例本身，其中最后一个参数可选。
```javascript
let validator={
	set:function(obj,prop,value) {
		if(prop==='age'){
			if(!Number.isInteger(value)){
				throw new TypeError('The age is not a interger');
			}
			if(value>200){
				throw new RangeError('The age seems invalid');
			}
		}
		obj[prop]=value;
	}
};
let person=new Proxy({},validator);
person.age=30;
person.age//30
person.age='he';//TypeError报错
person.age=300//RangeError报错
```
+ apply():apply拦截函数的调用,call和apply操作。
apply接收三个参数，分别是目标对象，目标对象的上下文(this),目标对象的参数数组
```javascript
let target=function(){
	return 'test'
}
let handler={
	apply:function(){
		return 'proxy';
	}
}
let p=new Proxy(target,handler);
p();//"proxy"
```
+ construct():用于拦截new操作符，为了使new操作符在新的proxy对象生效，用于初始化
代理的目标对象自身必须具有[[Construct]]方法；它接收三个参数，目标对象target，
构造函数参数列表argumentsList以及最初实例对象时，new命令作用的构造函数。
```javascript
let p=new Proxy(function(){},{
	construct:function(target,argumentsList,newTarget){
		console.log(newTarget===p);
		console.log("called"+argumentsList.join(','));
		return { value:(argumentsList[0]+argumentsList[1])*10}
	}
})
console.log(new p(1,2).value);
```
输出30，该方法必须返回一个对象，否则异常。
```javascript
let p=new Proxy(function(){},{
	construct:function(target,argumentsList,newTarget){
		return 2;
	}
})
console.log(new p(1,2))//UnCaught TypeError
```
+ has():判断是否具有某个属性,接收两个参数，目标对象target和要检查的属性prop,
并返回一个Boolean值。
```javascript
let p=new Proxy({},{
	has:function(target,prop){
		if(prop[0]==='_'){
			console.log("It is a private property.")
			return false;
		}
		return true;
	}
})
console.log('a' in p);//true
console.log('_a' in p);//It is a private property.
//false
```