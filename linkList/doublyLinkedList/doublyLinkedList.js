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
}
