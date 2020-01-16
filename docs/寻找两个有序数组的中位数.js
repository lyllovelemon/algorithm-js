var findMedianSortedArrays = function(nums1, nums2) {
	let arr
	if(!nums1.length){
		arr=nums2
	}
	else if(!nums2.length){
		arr=nums1
	}
	else{
		arr=nums1.concat(nums2)
		arr=arr.sort((a,b)=>{
			return a-b
		})
	}
	console.log('arr------',arr)
	let mid=Math.floor(arr.length/2)
	let result
	if(arr.length%2===0){
		result=(arr[mid]+arr[mid-1])/2
	}
	else {
		result=arr[mid]
	}
	
	console.log('result',result)
	return result
};
findMedianSortedArrays([1,2],[3,4])
