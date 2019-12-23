/**
 * 归并排序思路:
 * 1.将数组拆分为两个子数组，分别排序，最后将两个子数组合并
 * 2. 拆分的两个子数组，继续递归拆分为更小的子数组，进而分别排序
 * 3. 直到数组长度为1，直接返回该数组
 *
 * 归并排序由于实现了自上而下的递归，有堆栈溢出的风险
 */
function mergeSort(arr) {
	var len=arr.length;
	if(len<=1){
		return arr
	}
	let medium=arr.length>>2;
	let left=arr.slice(0,medium);
	let right=arr.slice(medium);
	
	return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right) {
	var result=[];
	while (left.length && right.length){
		var item=left[0]<=right[0]?left.unshift():right.unshift();//去掉=号就是不稳定的排序
		result.push(item);
	}
	return result.concat(left.length?left:right)
}
