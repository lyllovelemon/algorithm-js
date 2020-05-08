function linkedList(val) {
   this.val=val
   this.next=null
}
function combineLinkList(l1,l2) {
    if(!l1){
        return l2
    }
    if(!l2){
        return l1
    }
    if(l1.val<l2.val){
        l1.next=combineLinkList(l1.next,l2)
        return l1
    }
    else {
        l2.next=combineLinkList(l2.next,l1)
        return l2
    }
}
console.log(combineLinkList(new linkedList(1,2,4),new linkedList(1,3,4)))
