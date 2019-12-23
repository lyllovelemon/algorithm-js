/**
 * 希尔排序思路:
 * 1.选择一个增量序列t1,t2,...,tk，其中ti>tj,tk=1;
 * 2.按增量序列个数k，对序列进行k趟排序;
 * 3.每趟排序，根据对应的增量ti,将待排序序列分割成若干长度为m的子序列，分别对各子表进行直接插入排序。仅
 * 增量因子为1时，整个序列作为一个表来处理，表长度为整个序列的长度;
 */
function shellSort(arr) {
	var len=arr.length;
	if(len<=1){ return arr; }
	var tmp,gap=1;
	while(gap<len/5){
		gap=gap*5+1;
	}
	for(gap;gap>0;gap=Math.floor(gap/5)){
		for(var i=gap;i<len;i++){
			tmp=arr[i];
			for(var j=i-gap;j>=0&& arr[j]>tmp;j-=gap){
				arr[j+gap]=arr[j]
			}
			arr[j+gap]=tmp;
		}
	}
	return arr;
}