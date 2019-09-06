# 迭代器模式
## 概念
迭代器模式指提供一种方法顺序访问一个聚合对象中的每个元素，而不需要暴露该对象的内部表示。

## 实现一个each迭代器
```ecmascript 6
let each=function(ary,callback) {
  for(let i=0;i<ary.length;i++){
  	callback.call(ary[i],i,ary[ i ]);
  }
};
each([1,2,3]),function(i,n) {
  alert([i,n]);
}
```
## 内部迭代器和外部迭代器
```ecmascript 6
let Iterator=function(obj) {
  let current=0;
  let next=function() {
    current+=1;
  };
  let isDone=function() {
    return current>=obj.length;
  };
  let getCurrItem=function() {
    return obj[current];
  };
  return{
  	next:next,
  	isDone:isDone,
  	getCurrItem:getCurrItem
  }
};
let compare=function(iterator1,iterator2) {
  while (!iterator1.isDone()&& !iterator2.isDone()){
  	if(iterator1.getCurrItem()!==iterator2.getCurrItem()){
  		throw new Error ('iterator1和iterator2不相等');
  	}
  	iterator1.next();
  	iterator2.next();
  } 
  alert('iterator1和iterator2相等');
}
```
无论是内部迭代器还是外部迭代器，只要被迭代的聚合对象具有length属性而且可以用下标访问，它就可以被迭代。
