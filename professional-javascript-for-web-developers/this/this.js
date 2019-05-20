/**
 * Created by admin on 2019/5/16.
 * @author lemon<李亦黎>
 */
// function Person() {
// 	'use strict'
// 	this.age=0;
// 	let closure='123';
// 	setInterval(function growUp() {
// 		this.age++;
// 		console.log(closure);
// 	},1000);
// }
// let p=new Person();
let adder = {
	base : 1,
	
	add : function(a) {
		let f = v => v + this.base;
		return f(a);
	},
	
	addThruCall: function(a) {
		let f = v => v + this.base;
		let b = {
			base : 2
		};
		
		return f.call(b, a);
	}
};

console.log(adder.add(1));
console.log(adder.addThruCall(1));