/**
 * vue源码监听一个数组的变化
 * @author lemon<李亦黎>
 */
const arrayMethods=['push','pop','unshift','shift','splice','sort','reverse'];//定义数组方法
const arrayArguments=[];

arrayMethods.forEach((method)=>{
	//原生Array的原型方法
	let original=Array.prototype[method];
	// console.log('array原型',original);
	arrayArguments[method]=function () {
		console.log('方法被改变了',arguments);
		
		//调用对应原生方法并返回结果
		return original.apply(this,arguments);
	}
});
let list=['1','2','3'];
list._proto_=arrayArguments;
list.push('4');

let arr=['2','4','6'];
arr.push('8');

