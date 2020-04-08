/**
 * 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 作者：前端瓶子君
 链接：https://juejin.im/post/5e84ae366fb9a03c840d564f
 来源：掘金
 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * **/
function flatArr(arr){
    return arr.flat(Infinity).reduce((pre,cur)=>{
        return !pre.includes(cur)?pre.concat(cur):pre
    },[]).sort((a,b)=>a-b)
}
console.log(flatArr([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]))
