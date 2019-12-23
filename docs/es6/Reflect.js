// let p={
// 	a:'a'
// }
// let handler={
// 	set(target,key,value,receiver){
// 		console.log('set')
// 		Reflect.set(target,key,value,receiver)
// 	},
// 	defineProperty(target,key,attribute){
// 		console.log('defineProperty')
// 		Reflect.defineProperty(target,key,attribute)
// 	}
// }
// let obj=new Proxy(p,handler)
// obj.a='A'
//
// var myObject={
// 	foo:1
// }
// console.log(Reflect.has(myObject,'bar'))

// function Greeting(name) {
// 	this.name=name
// }
// const instance1=new Greeting('张三')
// console.log('instance1',instance1)
// const instance2=Reflect.construct(Greeting,['张三'])
// console.log('instance2',instance2)
// const myObj=new Greeting('fancy')
// console.log(Object.getPrototypeOf(myObj)===Greeting.prototype)
// console.log(Reflect.getPrototypeOf(myObj)===Greeting.prototype)
// const ages=[11,33,12,54,18,96]
// const youngest=Math.min.apply(Math,ages)
// const oldest=Math.max.apply(Math,ages)
// const type=Object.prototype.toString.call(youngest)
// console.log('young',youngest,'old',oldest,'type',type)
//
// const young=Reflect.apply(Math.min,Math,ages)
// const old=Reflect.apply(Math.max,Math,ages)
// const type2=Reflect.apply(Object.prototype.toString,young,[])
// console.log('young',young,'old',old,'type2',type2)
// var myObject={}
// Object.defineProperty(myObject,'hidden',{
// 	value:true,
// 	enumerable:false
// })
// var theDescriptor=Object.getOwnPropertyDescriptor(myObject,'hidden')
// console.log('thrDescriptor',theDescriptor)

const person=observable({
	name:'lemon',
	age:23
})
function print() {
	console.log(`name:${person.name},age:${person.age}`)
}
observe(print)
person.name='lyl'

const queuedObservers=new Set()
const observe=fn=>queuedObservers.add(fn)
const observable=obj=>new Proxy(obj,{set})
function set(target,key,value,receiver) {
	const result=Reflect.set(target,key,value,receiver)
	queuedObservers.forEach(observer=>observer())
	return result
}