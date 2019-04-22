# 队列
## 概念
队列是一种先进先出的有序集合。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

```ecmascript 6
function Queue() {
  let items=[];
  //添加新元素到队列
 this.enqueue=function(element) {
   items.push(element);
 }
 //移除队列的第一项，并返回被移除的元素
this.dequeue=function() {
  items.shift();
}
//获取队列最前面的项
this.front=function() {
  return items[0];
}
  this.isEmpty=function() {
    return items.length==0;
  }
  this.size=function() {
   return items.length;
  }
  this.print=function() {
    console.log(items.toString());
  }
}
```





