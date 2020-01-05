//1.原型链继承
// function SuperType() {
// 	this.property=true
// }
// SuperType.prototype.getSuperValue=function () {
// 	return this.property
// }
// function subType() {
// 	this.subProperty=false
// }
// subType.prototype=new SuperType()
// subType.prototype.getSubValue=function () {
// 	return this.subProperty
// }
// var instance=new subType()
// console.log(instance.getSuperValue)

//2,借用构造函数继承
// function superType() {
// 	this.colors=['red','blue','green']
// }
// function subType() {
// 	superType.call(this)
// }
// var instance=new subType()
// instance.colors.push('black')
// console.log(instance.colors)
// var instance2=new subType()
// console.log(instance2.colors)

//3.组合继承
function superType(name) {
	this.name=name
	this.colors=['red','blue','green']
}
superType.prototype.sayName=function () {
	console.log(this.name)
}
function subType(name,age) {
	superType.call(this,name)
	this.age=age
}
subType.prototype=new superType()
subType.prototype.constructor=subType
subType.prototype.sayAge=function () {
	console.log(this.age)
}
var instance1=new subType('Nicholas',29)
instance1.colors.push("black")

