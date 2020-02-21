/**
 * 选择排序原理：
 * 1.在未排序序列中找到最小元素，存到排序序列的起始位置
 * 2. 在剩余元素中寻找最小元素，放到已排序序列的末尾
 * 3.重复上面两个步骤，直到所有元素排序完毕
 */
function selectionSort(arr) {
	let len=arr.length
	if(len<=1)return arr
	for(let i=0;i<len;i++){
		let minIndex=i
		for(let j=i+1;j<len;j++){
			if(arr[minIndex]>arr[j]){
				minIndex=j
			}
		}
		if(minIndex!==-1){
			swap(arr,minIndex,i)
		}
	}
	return  arr
}
function swap(arr,i,j){
	[arr[i],arr[j]]=[arr[j],arr[i]]
}
console.log(selectionSort([1,4,5,2,5,7,8]))