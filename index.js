/**
 *队列实现
 **/
function Queue(){
    let items=[];
    this.enqueue=function(element){
        items.push(element);
    }
    this.dequeue=function(){
       return items.shift();
    }
    this.front=function(){
        return items[0];
    }
    this.isEmpty=function(){
        return items.length==0;
    }
    this.size=function(){
        return items.length;
    }
    this.print=function(){
        console.log(items.toString());
    }
}
//模拟优先队列
function PriorityQueue(){
    let items=[];
    function QueueElement(element,priority){
        this.element=element;
        this.priority=priority;
    }
    this.enqueue=function(element,priority){
        let queueElement=new QueueElement(element,priority);
        if(this.isEmpty()){
            items.push(queueElement);
        }
        else{
            let added=false;
            for(let i=0;i<items.length;i++){
                if(queueElement.priority<items[i].priority){
                    items.splice(i,0,queueElement);
                    added=true;
                    break;
                }
            }
        }
    }
}
//模拟击鼓传花
function hotPotato(nameList,num) {
    let queue=new Queue();
    for(let i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i]);
    }
    let eliminated='';
    while (queue.size()>1){
        for(let i=0;i<num;i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated=queue.dequeue();
        console.log(eliminated+"在击鼓传花中被淘汰");
    }
    return queue.dequeue();
}
let names=["John","Jack","Camila","Ingrid","Carl"];
let winner=hotPotato(names,7);
console.log("胜利者"+winner);
/**
 *实现链表
 **/
function LinkedList() {
    //Node 要加入列表的项 element要加入列表的值 next 指向列表中下一个节点的指针
    let Node=function (element) {
        this.element=element;
        this.next=null;
    };
    let length=0;
    let head=null;
    this.append=function (element) {
        let node=new Node(element),current;
        if(head===null){
            head=node;
        }
        else {
            current=head;
            while (current.next){
                current=current.next;
            }
            current.next=node;
        }
        length++;
    };
    this.insert=function (position,element) {};
    this.removeAt=function (position) {
        if(position>-1 && position<length){
            let current=head,previous,index=0;
            if(position===0){
                head=current.next;
            }
            else {
                while (index++<position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }
            length--;
            return current.element;
        }
        else {
            return null;
        }
    };
    this.remove=function (element) {

    };
    this.indexOf=function (element) {};
    this.isEmpty=function () {};
    this.size=function () {};
    this.toString=function () {};
    this.print=function () {};
}