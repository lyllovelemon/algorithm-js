/**
 * 设计一个flat函数实现将数组arr=[1,2,["3",4,"5",[6,[7,8],9]]]
 * 输出为1,2,"3"，4，"5",6,7,8,9，至少写出两种方法，要求不能改变数组中的原始数据类型
 * * **/
function flat(arr) {
	let flatArr=arr.flat(Infinity)
	for(let i in flatArr){
		console.log(flatArr[i])
	}
}
function flat2(arr) {
	if(!arr instanceof Array){
		throw new Error('arr must be array')
	}
	let flatArr=arr.toString().replace('/\[|\]/ig',' ')
	console.log(flatArr)
}
function flat3(arr){
	if(!arr instanceof Array)return
	searchArr(arr)
	function searchArr(arr) {
		for(let i in arr){
			if(arr[i] instanceof Array){
				return searchArr(arr[i])
			}
			console.log(arr[i])
		}
	}
}
function flat4(arr){
	console.log(Object.prototype.toString.call(arr))
	if(Object.prototype.toString.call(arr)==="[object Array]"){
		let newArr=arr.flat(Infinity)
		while (newArr.length){
			console.log(newArr.shift());
		}
	}
	
}
flat4([1,2,["3",4,"5",[6,[7,8],9]]])