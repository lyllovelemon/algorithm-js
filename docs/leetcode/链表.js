function linkedList() {
    let Node=function (element) {
        this.element=element;
        this.next=null;
    }
    let length=0;
    let head=null;
    this.append=function (element) {
        let node=new Node(element),current;
        if(!head){
            head=node
        }
        else {
            current=head
            while (current.next){
                current=current.next
            }
            //找到最后一项，将其next赋为node，建立连接
            current.next=node
        }
        length++;//更新链表的长度
    }
    this.insert=function (position,element) {
        if(position>-1&&position<length){
            let current=head,previous,index=0;
            //如果移除的是链表中第一个元素->让head指向链表中的第2个元素
            if(position===0){
                head=current.next
            }
            else {
                while(index++<position){
                    previous=current
                    current=current.next
                }
                previous.next=current.next
            }
            length--;
            return current.element
        }
        else {
            return null;//没有从链表中删除元素
        }
    }
    this.removeAt=function (position) {

    }
    this.remove=function (element) {

    }
    this.indexOf=function (element) {

    }
    this.isEmpty=function () {

    }
    this.size=function () {

    }
    this.getHead=function () {

    }
    this.toString=function () {

    }
    this.print=function () {

    }
}