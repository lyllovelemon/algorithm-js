Array.prototype.map=function (callback,thisArg) {
	if(this==null){
		throw new TypeError('cannot read property "map" of null or undefined')
	}
	let O=Object(this)
	let len=O.length>>>0
	if(typeof callback!=='function'){
		throw new Error(callback+'is not a function')
	}
	let T=thisArg
	let A=new Array(len)
	let k=0
	while (k<len){
		if(k in O){
			let kValue=O[k]
			let mappedValue=callback.call(T,kValue,k,O)
			A[k]=mappedValue
		}
		k++
	}
	
	return A
}