/**
 * 数组去重,let arr=[1,3,5,7,13,45,1,5,3,3,12]
 * 返回arr=[1,3,5,7,13,45,12]
 * **/
//方法一 使用ES6的Set
function filterArr(arr) {
	return new Set(arr)
}
//方法二:filter+indexOf()判断，如果数字不是第一次出现则被过滤
function filterArr2(arr){
	let newArr=arr.filter((item,index)=>{
		return arr.indexOf(item)===index
	})
	console.log(newArr)
}
//方法三:双重for循环
function filterArr3(arr){
	let isRepeat,newArr=[];
	for(let i=0;i<arr.length;i++){
		isRepeat=false
		for(let j=i+1;j<arr.length;j++){
			if(arr[i]===arr[j]){
				isRepeat=true
				break
			}
		}
		if(!isRepeat){
			newArr.push(arr[i])
		}
	}
	return newArr
}
//方法四:哈希表
function filterArr4(arr){
	let seen={}
	return arr.filter(function (item) {
		return seen.hasOwnProperty(item)?false:(seen[item]=true)
	});
}
//方法五:sort排序，相同的数字会排在相邻n个位置
function filterArr5(arr){
	let lastArr=[]
	const newArr=arr.sort((a,b)=>{
		return a-b
	})
	for(let i=0;i<newArr.length;i++){
		if(newArr[i]!==newArr[i+1]){
			lastArr.push(newArr[i])
		}
	}
	return lastArr
}
filterArr5([1,3,5,7,13,45,1,5,3,3,12])