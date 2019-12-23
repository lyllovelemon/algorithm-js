function foo(something) {
	this.a=something
}
var obj1={
	foo:foo
}
var obj2={}
obj1.foo(2)
console.log(obj1.a)

obj1.foo.call(obj2,3)
console.log(obj2.a)
// 	console.log(this.a,something)
// 	return this.a+something
// }
// var obj={
// 	a:2
// }
// var bar=function () {
// 	return foo.apply(obj,arguments)
// }
// var b=bar(3)
// console.log(b)
// function foo() {
// 	console.log(this.a)
// }
//
// var obj={
// 	a:2,
// }
// var bar=function () {
// 	foo.call(obj)
// }
// bar()