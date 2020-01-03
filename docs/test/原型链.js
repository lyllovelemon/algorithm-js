//1.原型链继承
// function Father() {
//  this.property=true
// }
// Father.prototype.getValue=function () {
//     return this.property
// }
// function Son() {
//     this.subProperty=false
// }
// Son.prototype=new Father()
// Son.prototype.getSubValue=function () {
//     return this.subProperty
// }
// let instance=new Son()
// console.log(instance.getSubValue())
//2.借用构造函数继承
// function Father() {
//     this.colors=['red','blue']
// }
// function Son() {
//     Father.call(this)
// }
// let instance=new Son()
// let instanc2=new Son()
// instance.colors.push('green')
// console.log(instance.colors)
//
// console.log(instance.colors)

//3.原型链和借用构造函数继承
// function Father(name) {
//     this.name=name
//     this.colors=['red','blue','green']
// }
// Father.prototype.getValue=function () {
//     return this.name
// }
// function Son(name,age) {
//     Father.call(this,name)
//     this.age=age
// }
// Son.prototype=new Father()
// let instance1=new Son('lemon',23)
// instance1.colors.push('black')
// console.log(instance1.colors)
// console.log(instance1.getValue())
// let instance2=new Son('qq',24)
// console.log(instance2.colors)
// console.log(instance2.getValue())

//4.原型继承
// function object(o) {
//     function F() {}
//     F.prototype=o
//     return new F()
// }
var person={
    friends:['yuki','sakura','may']
}
var person2=Object.create(person)
var person3=Object.create(person)
// var person2=object(person)
person2.friends.push('bob')
// var person3=Object(person)
person3.friends.push('yama')
console.log(person.friends)
console.log(person2.friends)
console.log(person3.friends)


//object()
//5.extend继承
