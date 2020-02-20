/**
 * 冒泡排序
 */
function bubbleSort(arr) {
	if(arr.length<=1){ return }
	let len=arr.length;
	for(var i=0;i<len;i++){
		for(var j=1;j<len-1-i;j++){
			if(arr[j]>arr[j+1]){
				swap(arr,j,j+1)
			}
		}
	}
	return arr;
}
function swap(arr,i,j) {
	[arr[i],arr[j]]=[arr[j],arr[i]]
}
console.log(bubbleSort([6,1,4,6,7,2,3]))
