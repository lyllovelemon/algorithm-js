/**
 * Created by admin on 2019/9/20.
 * @author lemon<李亦黎>
 */
/**
 * 插入排序:
 * 1.默认第一个元素是已经排序好的
 * 2.从下一个元素开始，和已排序数组序列中从后往前扫描
 * 3.如果该元素(已排序)大于新元素，将该元素移到下一位
 * 4.重复步骤3直到找到已排序的元素小于或等于新元素
 * 5.将新元素插入到该位置后
 * 6.重复步骤2-5
 * **/
function insertionSort(arr){
	let len=arr.length,tmp
	if(len<=1)return arr
	for(let i=1;i<len;i++){
		tmp=arr[i]
		for(let j=i;j>=0;j--){
			if(arr[j-1]>tmp){
				arr[j]=arr[j-1]
			}
			else {
				arr[j]=tmp
				break
			}
		}

	}
	return  arr
}

// function insertionSort(arr) {
// 	var tmp,len=arr.length
// 	if(len<=1)return arr;
// 	for(let i=1;i<len;i++){
// 		tmp=arr[i]
// 		for(let j=i;j>=0;j--){
// 			if(arr[j-1]>tmp){
// 				arr[j]=arr[j-1]
// 			}
// 			else {
// 				arr[j]=tmp
// 				break
// 			}
// 		}
// 	}
// 	return  arr
// }
console.log(insertionSort([1,3,5,4,2,8]))

