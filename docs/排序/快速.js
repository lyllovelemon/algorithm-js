//快速排序 时间复杂度 O(nlogn)
function quickSort(arr){
	if(arr.length<=1){
		return arr
	}
	let priv=arr[0],left=[],right=[]
	for(let i=1;i<arr.length;i++){
		if(arr[i]<priv){
			left.push(arr[i])
		}
		else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat(priv,quickSort(right))
}
console.log(quickSort([1,24,36,12,3,5,13,99,13,51]))
// function quickSort(arr) {
// 	if(arr.length<2){
// 		return arr
// 	}
// 	let priv=arr[0]
// 	let left=[],right=[]
// 	for(let i=1;i<arr.length;i++){
// 		if(arr[i]>priv){
// 			right.push(arr[i])
// 		}
// 		else {
// 			left.push(arr[i])
// 		}
// 	}
// 	return quickSort(left).concat(priv,quickSort(right))
//
// }