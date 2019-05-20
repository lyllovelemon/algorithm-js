/**
 * Created by admin on 2019/5/16.
 * @author lemon<李亦黎>
 */
// let add=function () {
// 	let _args=[];
// 	return function () {
// 		if(arguments.length===0){
// 			console.log(arguments);
// 			return _args.reduce(function (a,b) {
// 				return a + b;
// 			})
// 		}
// 		[].push.apply(_args,arguments);
// 		return arguments.callee;
// 	}
// }
// let sum=add();
// sum(100,200)(300);
// sum(400);
// sum();
let curry=function (fn) {
	let len=fn.length,args=[];
	return function () {
		Array.prototype.push.apply(args,arguments);
		let argsLen=args.length;
		if(argsLen<len){
			return arguments.callee;
		}
		return fn.apply(fn,args);
	}
}
let add=function (a,b,c) {
	return a + b + c;
}
let adder=curry(add);
adder(1)(2)(3);