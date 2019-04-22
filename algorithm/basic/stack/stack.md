# 栈
## 概念
栈是一种先进后出的有序集合。新添加或待删除的元素都保存在栈的末尾，称为栈顶。
另一端就叫栈底。

```ecmascript 6
function Stack() {
  let items=[];
  //添加新元素到栈顶
  this.push=function(element) {
    items.push(element);
  }
  //移除栈顶的元素
  this.pop=function() {
    items.pop();
  }
  //返回栈顶的元素，不对栈做任何修改
  this.peek=function() {
    return items[items.length-1];
  }
  //判断栈是否为空，返回Boolean值
  this.isEmpty=function() {
    return items.length==0;
  }
  //移除栈里的所有元素
  this.clear=function() {
    items=[];
  }
  //返回栈里的元素个数
  this.size=function() {
    return items.length;
  }
  this.print=function() {
    console.log(items.toString());
  }
}
```





