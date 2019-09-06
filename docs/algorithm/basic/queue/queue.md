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

## 优先队列

元素的添加和修改基于优先级，比如机场登机顺序，头等舱和商务舱乘客的优先级要高于经济舱乘客。

实现最小优先队列(优先级越小越优先)：
1. 设置优先级，在正确位置添加元素
2. 或者用列操作添加元素，然后根据优先级移除它们。
```ecmascript 6
function PriorityQueue() {
  let items=[];
  function QueueElement(element,priority) {
    this.element=element;
    this.priority=priority;
  }
  this.enqueue=function(element,priority) {
    let queueElement=new QueueElement(element,priority);
    if(this.isEmpty()){
        items.push(queueElement);
    }
    else {
        let added=false;
        for(let i=0;i<items.length;i++){
            if(queueElement.priority<items[i].priority){
                items.splice(i,0,queueElement);
                added=true;
                break;
            }
        }
        if(!added){
            items.push(queueElement);
        }
    }
  }
   //移除优先队列的第一项，并返回被移除的元素
    this.dequeue=function() {
    items.shift();
    }
    //获取优先队列最前面的项
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





