/**
 * vue源码之:监听一个对象的变化
 * @author lemon<李亦黎>
 */
//观察者构造函数
function Observer(data) {
	this.data=data;
	this.walk(data);
}
let p=Observer.prototype;
p.walk=function (obj) {
	let val;
	for(let key in obj){
		// 这里为什么要用hasOwnProperty进行过滤呢？
		// 因为for...in 循环会把对象原型链上的所有可枚举属性都循环出来
		// 而我们想要的仅仅是这个对象本身拥有的属性，所以要这么做。
		if(obj.hasOwnProperty(key)){
			val=obj[key];
			console.log('val', val ,'key', key);
			
			//如果没有遍历到最底层，继续new Observer
			if(typeof val ==='Object'){
				new Observer(val);
			}
			this.convert(key,val);
		}
	}
};
p.convert=function (key,val) {
	Object.defineProperty(this.data,key,{
		enumerable:true,
		configurable:true,
		get:function () {
			console.log('get'+ key);
			return val;
		},
		set:function (newVal) {
			console.log('set' + key + '='+ newVal);
			if(newVal===val)return;
			val=newVal;
		}
	})
};
let data={
	name:'lemon',
	age:22
	// user:{
	// 	name:'lemon',
	// 	age:22
	// },
	// address:{
	// 	city:'Changsha'
	// }
};
let app=new Observer(data);

