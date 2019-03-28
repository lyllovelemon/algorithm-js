//排序算法
function ArrayList() {
    let array=[];
    this.insert=function (item) {
        array.push(item);
    };
    this.toString=function () {
        return array.join();
    }
    var swap=function (index1,index2) {
        let aux=array[index1];
        array[index1]=array[index2];
        array[index2]=aux;
    }
    //冒泡排序 时间复杂度O(n^2)
    this.bubbleSort=function () {
        let array=[];
        let length=array.length;
        for(let i=0;i<length;i++){
            for(let j=0;j<length-i-1;j++){
                if(array[j]>array[j+1]){
                    swap(j,j+1);
                }
            }
        }

    }
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
// let array=createNonSortedArray(5);
// console.log(array.toString());
// array.bubbleSort();
// console.log(array.toString());
