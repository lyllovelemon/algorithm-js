## 实现一个call函数
```javascript
Function.prototype.myCall=function(context) {
  if(typeof this!=='function'){
  	throw new TypeError('this is not a function');
  }
  context=context||window;
  context.fn=this;
  let arg=[...arguments].slice(1);
  let result=context.fn(...arg);
  delete context.fn;
  return result;
}
```
## 实现一个apply函数
```javascript
Function.prototype.myApply=function(context) {
  if(typeof this!=='function'){
  	throw new TypeError('this is not a function');
  }
  context=context||window;
  context.fn=this;
  let result;
  if(arguments[1]){
  	result=context.fn(...arguments[1]);
  }else {
  	result=context.fn();
  }
  delete context.fn;
  return result;
}
```
## 实现一个bind函数
```javascript
Function.prototype.myBind=function(context) {
  if(typeof this!=='function'){
  	throw new TypeError('not a function')
  }
  let that=this;
  let arg=[...arguments].slice(1);
  return function F() {
  	//处理函数使用new的情况
    if(this instanceof F){
    	return new that(...arg,...arguments);
    }
    else {
    	return that.apply(context,arg.concat(...arguments));
    }
  }
}
```
## instanceof 的原理
```javascript
//右边变量的原型存在于左边变量的原型链上
function instanceOf(left,right) {
  let leftValue=left._proto_;
  let rightValue=right.prototype;
  while (true){
  	if(leftValue===null){
  		return false;
  	}
  	if(leftValue===rightValue){
  		return true;
  	}
  	leftValue=leftValue._proto_;
  } 
}
```
## Object.create的基本实现原理
```javascript
//将传入的对象作为原型
function create(obj) {
  function F() {}
  F.prototype=obj;
  return new F();
}
```
## new原理
```javascript
function myNew(fun) {
  return function() {
    //创建一个新对象且将其隐式原型指向构造函数原型
    let obj={
    	_proto_:fun.prototype
    }
    //执行构造函数
    fun.call(obj,...arguments);
    //返回该对象
    return obj;
  }
}
function person(name,age) {
  this.name=name;
  this.age=age;
}
let obj=myNew(person)('lemon','23');
```
## 实现一个promise
```javascript
class Promise {
  constructor(fn){
  	this.state='pending';
  	this.value=undefined;
  	this.reason=undefined;
  	let resolve=value=>{
  		if(this.state==='pending'){
  			this.state='fulfilled';
  			this.value=value;
  		}
  	};
  	let reject=value=>{
  		if(this.state==='pending'){
  			this.state='rejected';
  			this.reason=value;
  		}
  	}
  	try {
  	  fn(resolve,reject)
  	}
  	catch (e) {
  	  reject(e);
  	}
  	then(onFulfilled,onRejected){
  		switch (this.state) {
  		  case 'fulfilled':
  		  	onFulfilled();
  		  	break;
  		  case 'rejected':
  		  	onRejected();
  		  	break;
  		  default:
  		}
  	}
  }
}
```
## 实现浅拷贝
```javascript
//1....实现
let copy1={...{x:1}};
//2.Object.assign()实现
let copy2=Object.assign({},{x:1});
```

## 实现深拷贝
```javascript
//1.JSON.parse(JSON.stringify())
let obj={a:1,b:{x:3}};
JSON.parse(JSON.stringify(obj))

//2.递归实现
function deepClone(obj) {
  let copy=copy instanceof Array?[]:{};
  for(let i in  obj){
  	if(obj.hasOwnProperty(i)){
  		copy[i]=typeof copy[i]==='Object'?deepClone(obj[i]):obj[i]
  	}
  }
  return copy;
}
```
## 用setTimeout模拟setInterval
```javascript
//可避免setInterval因执行时间导致的间隔执行时间不一致
setTimeout(function() {
  setTimeout(arguments.callee,500)
},500);
```

## js实现一个继承方法
```javascript
//1.构造函数实现继承
function Child() {
  parent.call(this);
}
//2.寄生继承原型属性
(function(){
	let Super=function() {};
	Super.prototype=parent.prototype;
	Child.prototype=new Super();
})
```

## 实现一个基本的Event bus
```javascript
class EventEmitter {
  constructor(){
  	//存储事件
  	this.events=this.events||new Map();
  }
  //监听事件
  addEventListener(type,fn){
  	if(!this.events.get(type)){
  		this.events.set(type,fn);
  	}
  }
  //触发事件
  emit(type){
  	let handler=this.events.get(type);
  	handler.apply(this,[...arguments].slice(1));
  }
}
//测试
let emitter=new EventEmitter();
//监听事件
emitter.addEventListener('ages',age=>{
	console.log(age);
})
//触发事件
emitter.emit('ages',23);
```
## 实现一个数据双向绑定
```javascript
let obj={};
let input=document.getElementById('input');
let span=document.getElementById('span');
//数据劫持
Object.defineProperty(obj,'text',{
	configurable:true,
	enumerable:true,
	get(){
		console.log('有数据了');
		return obj['text'];
	},
	set(newVal) {
		input.value=newVal;
		span.innerHTML=newVal;
		console.log('值为',newVal)
	}
})
input.addEventListener('keyup',function(e) {
  obj.text=e.target.value;
})
```
## rem基本设置
```javascript
function setRem() {
  let doc=document.documentElement;
  let width=doc.getBoundingClientRect().width;
  let rem=width/75;
  doc.style.fontSize=rem+'px';
}
addEventListener('resize',setRem);
```
## 实现拖拽
```javascript
window.onload=function() {
  let drag=document.getElementById('div');
  drag.onmousedown=function(e) {
    var e=e||window.event;
    //鼠标与拖拽元素的距离=鼠标与可视区边界的距离-拖拽元素与边界的距离
    let diffX=e.clientX-drag.offsetLeft;
    let diffY=e.clientY-drag.offsetTop;
    drag.onmousedown=function(e) {
      //拖拽元素移动的距离=鼠标与可视区边界的距离-鼠标与拖拽元素边界的距离
      let left=e.clientX-diffX;
      let top=e.clientY-diffY;
      
      //避免拖拽出可视区
      if(left<0){
      	left=0;
      }
      else if(left>window.innerWidth-drag.offsetWidth){
      	left=window.innerWidth-drag.offsetWidth;
      }
      if(top<0){
      	top=0;
      }
      else if(top<window.innerHeight-drag.offsetHeight){
      	top=window.innerHeight-drag.offsetHeight;
      }
      drag.style.left=left+'px';
      drag.style.top=top+"px";
    }
    drag.onmouseup=function(e) {
      this.onmousemove=null;
      this.onmouseup=null;
    }
  }
}
```
## 实现一个节流函数
## 实现一个防抖函数