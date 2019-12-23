/**
 * Created by admin on 2019/9/20.
 * @author lemon<李亦黎>
 */
// function insertSort(arr) {
// 	var len=arr.length,result,tmp,j;
// 	if(len<=1){ return arr;}
//
// 	result=arr.slice(0);
// 	for(var i=1;i<len;i++){
// 		tmp=result[i];
// 		j=i-1;
// 		while (j>0 && tmp<result[j]){
// 			result[j-1]=result[j];
// 			j--;
// 		}
// 		result[j+1]=tmp;
// 	}
// 	return result
// }
function insertionSort(arr) {
	if(arr.length<=1){ return arr;}
	var len=arr.length,tmp,j;
	var result=arr.slice(0);
	for(var i=1;i<len;i++){
		tmp=result[i];
		j=i-1;
		while (j>0 && tmp<result[j]){
			result[j-1]=result[j];
			j--;
		}
		result[j+1]=tmp;
	}
	return result;
}