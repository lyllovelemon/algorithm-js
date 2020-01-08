const binarySearch=(arr,target)=>{
    if(!arr.length)return -1
    let low=0,high=arr.length-1
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]>target){
            high=mid-1
        }
        else {
            low=mid+1
        }

    }
    return -1
}
console.log(binarySearch([1,2,3,4,5,7,8,11,16],16))