/**
 * 选择排序原理：
 * 1.在未排序序列中找到最小元素，存到排序序列的起始位置
 * 2. 在剩余元素中寻找最小元素，放到已排序序列的末尾
 * 3.重复上面两个步骤，直到所有元素排序完毕
 */
// function selectionSort(arr) {
// 	if(arr.length<=1){ return arr; }
// 	let len=arr.length;
// 	let min,temp;
// 	for(let i=0;i<len-1;i++){
// 		min=arr[i];
// 		for(let j=i+1;j<len;j++){
// 			if(min>arr[j]){
// 				min=arr[j]
// 			}
// 		}
// 		temp=arr[i];
// 		arr[i]=min;
// 		min=temp
//
// 	}
// 	return arr;
//
// }
function selectionSort(arr) {
	let len=arr.length,min,tmp
	if(len<=1)return arr
	for(let i=0;i<len;i++){
		min=arr[i]
		for(let j=i+1;j<len;j++){
			if(min>arr[j]){
				min=arr[j]
			}
		}
		tmp=arr[i]
		arr[i]=min
		min=tmp
	}
	return  arr
}
console.log(selectionSort([1,4,5,2,5,7,8]))