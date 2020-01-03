console.log(bubbleSort([1,24,36,12,3,5,13,99,13,51]))

function bubbleSort(arr) {
	if(arr.length<=1){
		return arr
	}
	for(let i=0;i<arr.length-1;i++){
		for(let j=1;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
				[arr[j],arr[j+1]]=[arr[j+1],arr[j]]
				// let temp;
				// temp=arr[j]
				// arr[j]=arr[j+1]
				// arr[j+1]=temp
			}
		}
	}
	return arr
}
