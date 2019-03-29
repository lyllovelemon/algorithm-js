function LinkedList() {
    /**
     *element 存储元素本身的节点
     * next 指向下一个元素的引用
     * **/
    let Node=function (element) {
        this.element=element;
        this.next=null;
    }
    let length=0;
    let head=null;

    //向列表尾部添加一个新项
    this.append=function (element) {
    let node=new Node(element),current;
    if(head===null){head=node;}
    else{
        current=node;
        //循环列表直至找到最后一项
        while (current.next){
            current=current.next;
        }
        current.next=node;
    }
    length++;//更新链表长度
    };
    this.insert=function (position,element) {};//向列表特定位置插入一个新项
    this.removeAt=function (position) {};
    this.remove=function (element) {};
    this.indexOf=function (element) {};
    this.isEmpty=function () {};
    this.size=function () {};
    this.toString=function () {};
    this.print=function () {};
}
let list=new LinkedList();
list.append(15);
list.append(10);
