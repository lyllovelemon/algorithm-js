# 排序算法
在开始排序前，我们先创建一个数组(列表)来表示待排序和搜索的数据结构。
```ecmascript 6
function ArrayList(){
 let array = []; 
 this.insert = function(item){ 
 array.push(item);
 };
 this.toString= function(){ 
 return array.join();
 };
} 
```
## 冒泡排序
冒泡排序比较任何两个相邻的项，如果第一个比第二个大，则交换它们。元素项向上移动至
正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。
```ecmascript 6
this.bubbleSort = function(){
 let length = array.length; //{1}
 for (let i=0; i<length; i++){ //{2}
 for (let j=0; j<length-1; j++ ){ //{3}
 if (array[j] > array[j+1]){ //{4}
 swap(j, j+1); //{5}
 }
 }
 }
}; 
let swap = function(index1, index2){
 let aux = array[index1];
 array[index1] = array[index2];
 array[index2] = aux;
}; 

 //选择排序 时间复杂度O(n^2)
    this.selectionSort=function () {
        let length=array.length,indexMin;
        for(let i=0;i<length-1;i++){
            indexMin=i;
            for(let j=i;j<length;j++){
                if(array[j]<array[indexMin]){
                    indexMin=j;
                }
            }
            if(i!==indexMin){
                swap(i,indexMin);
            }
        }
    }
    //插入排序
    this.insertionSort=function () {
        let length=array.length,j,temp;
        for(let i=1;i<length;i++){
            j=i;
            temp=array[j];
            while (j>0 && array[j-1>temp]){
                array[j]=array[j-1];
                j--;
            }
            array[j]=temp;
        }
    }
}
selectArray=createNonSortedArray(5);
console.log(selectArray.toString());
selectArray.selectionSort();
console.log(selectArray.toString());

function createNonSortedArray(size) {
    let array=new ArrayList();
    for(let i=size;i>0;i--){
        array.insert(i);
    }
    return array;
}
```
> 冒泡排序算法的复杂度是O(n2),选择排序复杂度为O(n2),

## 归并排序
归并排序是一种分治算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一
个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
> 归并排序复杂度为O(nlogn)。
