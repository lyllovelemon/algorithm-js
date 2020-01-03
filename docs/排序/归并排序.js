function mergeSort(arr) {
	let len = arr.length
	if (len < 2) {
		return arr
	}
	let middle=len>>1,left=arr.slice(0,middle),right=arr.slice(middle)
	return merge(mergeSort(left),mergeSort(right))
	function merge(left,right) {
		let result=[]
		while (left.length&&right.length){
			if(left[0]<=right[0]){
				result.push(left.shift())
			}
			else {
				result.push(right.shift())
			}
		}
		while (left.length){
			result.push(left.shift())
		}
		while (right.length){
			result.push(right.shift())
		}
		return result
	}
}

console.log(mergeSort([1,24,36,12,3,5,13,99,13,51]))