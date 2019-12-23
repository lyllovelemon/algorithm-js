/**
 * 在数组里找出和为给定值的两个数,输入一维数组array和n，找出和为n的任意两个元素，例如:
 * array=[2,3,1,10,4,30]
 * n=31
 * 则结果应该输出[1,30] 顺序不重要
 * 如果有多个满足条件的，返回任意一对即可
 */
function getNums(arr,n) {
	if(!arr.length||!n)return
	let l=arr.length;
	let sum=0,result=[]
	for(let i=0;i<l;i++){
		console.log('i',arr[i])
		for(let j=i+1;j<l-i;j++){
			console.log('j',arr[j])
			if(arr[i]+arr[j]===n){
				result.push(arr[i],arr[j])
			}
		}
	}
	console.log('result',result)
	return result
}
getNums([2,3,1,10,4,30],31)
