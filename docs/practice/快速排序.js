/**
 * 快速排序是冒泡排序的改进
 * 思路:
 * 1.在数组里找到一个基准数字pivot
 * 2.循环遍历数组，值比pivot小则存入左边的数组，否则存入右边的数组
 * 3. 不断重复步骤2，直到只剩一个元素
 * **/
function quickSort(arr) {
    if(arr.length<=1){ return arr;}
    let pivotIndex=Math.floor(arr.length/2);
    let pivot=arr.splice(pivotIndex,1)[0];
    let left=[];
    let right=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return  quickSort(left).concat([pivot],quickSort(right))
}

console.log(quickSort([1,65,2,6,1,7,2,7,13,5]))