# 发布-订阅模式
## 概念
发布订阅模式又称为观察者模式，它定义对象间的一种一对多的依赖关系.

1. 发布-订阅模式可广泛用于异步编程。

 2. 发布—订阅模式可以取代对象之间硬编码的通知机制，一个对象不用再显式地调
用另外一个对象的某个接口。发布—订阅模式让两个对象松耦合地联系在一起，虽然不太清楚彼
此的细节，但这不影响它们之间相互通信。当有新的订阅者出现时，发布者的代码不需要任何修
改；同样发布者需要改变时，也不会影响到之前的订阅者。只要之前约定的事件名没有变化，就
可以自由地改变它们。

## DOM事件
DOM事件绑定可以当成一个发布-订阅模式
```ecmascript 6
document.body.addEventListener('click',function() {
  alert(2);
},false);
document.body.click();//模拟用户点击
```
## 自定义事件
自定义事件可看为一个发布-订阅模式
1. 指定谁当发布者(如售楼处)；
2. 然后给发布者建立一个缓存列表，用于存放回调函数以便通知订阅者；
3. 最后发布消息时，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数(遍历花名册，挨个发短信)

另外，我们还可以往回调函数里填入一些参数，订阅者可以接收这些参数。这是很有必要的，
比如售楼处可以在发给订阅者的短信里加上房子的单价、面积、容积率等信息，订阅者接收到这
些信息之后可以进行各自的处理
```ecmascript 6
let salesOffice={};//定义售楼处
salesOffice.clientList=[];//缓存列表，存放订阅者的回调函数
salesOffice.listen=function(key,fn) {
	if(!this.clientList[key]){
		this.clientList[key]=[];
	}
  this.clientList[key].push(fn);
};
salesOffice.trigger=function() { //发布消息
	let key=Array.prototype.shift.call(arguments),//取出消息类型
	fns=this.clientList[key];//取出该消息对应回调函数集合
	if(!fns|| fns.length===0){
		return false;
	}
  for(let i=0,fn;fn=fns[i++];){
    	fn.apply(this.arguments)
    }
};
salesOffice.listen('squareMeter88',function(price) {
  console.log('价格='+price);
});
salesOffice.trigger(1200000,120);
```
我们可以把发布订阅的功能提取出来，放在一个单独的对象里。
```ecmascript 6
let event={
	clientList:[],
	listen:function(key,fn) {
	  if(!this.clientList[key]){
	  	this.clientList[key]=[];
	  }
	  this.clientList[key].push(fn);
	},
	trigger:function() {
	  let key=Array.prototype.shift.call(arguments),fns=this.clientList[key];
	  if(!fns||fns.length===0){
	  	return false;
	  }
	  for(let i=0,fn;fn=fns[i++];){
	  	fn.apply(this,arguments);
	  }
	}
};
/*为所有对象动态安装发布-订阅功能*/
let installEvent=function(obj) {
  for(let i in event){
  	obj[i]=event[i];
  }
}
/*取消订阅*/
event.remove=function(key,fn) {
  let fns=this.clientList[key];
  if(!fns){
  	//没被订阅直接返回
  	return false;
  }
  //如果没有传入回调函数，需要取消key对应所有消息的订阅
  if(!fn){
  	fns && (fns.length=0);
  }
  else {
  	for(let l=fns.length-1;l>=0;l--){
  		let _fn=fns[l];
  		if(_fn===fn){
  			fns.splice(l,1);//删除订阅者的回调函数
  		}
  	}
  }
};
let salesOffice={};
let installEvent=function(obj) {
  for(let i in event){
  	obj[i]=event[i];
  }
}
installEvent(salesOffice);
salesOffice.listen('squareMeter120',fn1=function(price) {
  console.log('价格='+price);
});
salesOffice.listen('squareMeter88',fn2=function(price) {
  console.log('价格='+price);
});
salesOffice.remove('squareMeter88',fn2);


```
## 优缺点
+ 时间解耦、对象解耦，是一种异步编程的实现方式

缺点
+ 要消耗一定的时间和内存
+ 程序难以追踪和维护