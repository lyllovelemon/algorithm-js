// let arr=[1,2,3,4,5]
// Array.prototype._filter=function (cb) {
// 	if(typeof cb==='function'){
// 		let arr=this
// 		return arr.reduce((prev,item,index,array)=>{
// 			cb(item,index,array)?prev.push(item):null
// 			return prev
// 		},[])
// 	}
// 	else {
// 		throw new Error(cb+'is not a function')
// 	}
//
// }
// let res=arr._filter(n=>n>2)
// console.log(res)
let labelLists=[{selection1:null,selection2:null,selection3:null,disabled:false,id:Date.now()}]
let copy=labelLists.slice()
copy.push({
	selection1:'解决',selection2:'呵呵',selection3:'非递归',disabled:false,id:Date.now()
})
console.log('copy',copy)
console.log('label',labelLists)