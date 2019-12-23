class Widget {
	foo(baz){
		bar.call(this,baz)
	}
}
function bar(baz) {
	return this.snaf=baz
}

// class IncreasingCounter {
// 	constructor(){
// 		this._count=0
// 	}
// 	get value(){
// 		console.log('Getting the current value')
// 		return this._count
// 	}
// 	increment(){
// 		this._count++;
// 	}
// }
// class Logger {
// 	constructor() {
// 	}
// }
// function selfish(target) {
// 	const cache=new WeakMap()
// 	const handler={
// 		get(target,key){
// 			const value=Reflect.get(target,key)
// 			if(typeof value!=='function'){
// 				return value
// 			}
// 			if(cache.has(value)){
// 				cache.set(value,value.bind(target))
// 			}
// 			return cache.get(value)
// 		}
// 	}
// 	const proxy=new Proxy(target,handler)
// 	console.log(proxy)
// 	return proxy
// }
// const logger=selfish(new Logger())
// console.log('logger',logger)


// class obj {
// 	constructor(){
// 		this.getThis=()=>this;
// 	}
// }
// const myObj=new obj()
// console.log(myObj.getThis()===myObj)


// class Logger {
// 	constructor(){
// 		this.printName=this.printName.bind(this)
// 	}
// 	printName(name='there'){
// 		this.print(`Hello ${name}`)
// 	}
// 	print(text){
// 		console.log(text)
// 	}
// }
// const logger=new Logger()
// const {printName}=logger
// printName()
// class Foo {
// 	constructor(...args){
// 		this.args=args
// 	}
// 	* [Symbol.iterator](){
// 		for(let arg of this.args){
// 			yield arg
// 		}
// 	}
// }
// for(let x of new Foo('hello','world')){
// 	console.log(x)
// }