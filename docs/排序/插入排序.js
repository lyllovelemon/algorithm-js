function insertionSort(arr){
	if(arr.length<=1){
		return arr
	}
	for(let i=1;i<arr.length;i++){
		for(let j=0;j<i;j++){
			if(arr[i]<arr[j]){
				arr.splice(j,0,arr[i])
				arr.splice(i+1,1)
			}
		}
	}
	return arr
}
console.log(insertionSort([1,24,36,12,3,5,13,99,13,51]))
// function insertionSort(arr) {
// 	if(arr.length===0){
// 		return arr
// 	}
// 	for(let i=1;i<arr.length;i++){
// 		for(let j=0;j<i;j++){
// 			if(arr[i]<arr[j]){
// 				arr.splice(j,0,arr[i])
// 				arr.splice(i+1,1)
// 				break
// 			}
// 		}
// 	}
// 	return arr
// }