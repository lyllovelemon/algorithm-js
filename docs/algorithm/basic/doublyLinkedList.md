# 双链表
```ecmascript 6
function DoublyLinkedList() {
    let node=function (element) {
        this.element=element;
        this.next=null;
        this.prev=null;
    }
    let length=0;
    let head=null;
    let tail=null;

    this.insert=function (position,element) {
        if(position>=0 && position<=length){
            let node=new Node(),current=head,previous,index=0;
            if(position===0){
                if(!head){
                    head=node;
                    tail=node;
                }
                else {
                    node.next=current;
                    current.prev=node;
                    head=node;
                }
            }

        }
    }
    /**
     *current要移除的元素
     **/
    this.removeAt=function (position) {
        if(position>-1 && position<length){
            let current=head,previous,index=0;
            if(position===0){
                head=current.next;
                if(length===1){
                    tail=null;
                }
                else {
                    head.prev=null;
                }
            }
            else if(position===length-1){
                current=tail;
                tail=current.prev;
                tail.next=null;
            }
            else {
                while (index++<position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
                current.next.prev=previous;
            }
            length--;
            return current.element;
        }
        else {
            return null;
        }
    }
}

```