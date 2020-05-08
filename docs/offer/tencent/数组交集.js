/**
 * 给定两个数组，编写一个函数来计算它们的交集
 * **/
function combineArr(arr1,arr2) {
  let res=arr1.filter((item)=> arr2.includes(item))
    return new Set(res)
}
//console.log(combineArr([1,2,2,1],[2,2]))
