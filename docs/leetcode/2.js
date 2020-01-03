function ListNode(val) {
    this.val=val
    this.next=null
}
var addTwoNumbers=function (l1,l2) {
    let val1=0,val2=0,current_node=null,result=null;
    var carry=0;
    var calculateSum=function(sum) {
        if(sum>=10){
            carry=1;
            sum-=10
        }
        else {
            carry=0
        }
        return sum

    }
    if(l1||l2){
        val1=l1?l1.val:0;
        val2=l2?l2.val:0;
        l1=l1?l1.next:null;
        l2=l2?l2.next:null;
        current_node=new ListNode(calculateSum(val1+val2))
        result=current_node
        while (l1||l2){
            val1=l1?l1.val:0;
            val2=l2?l2.val:0;
            l1=l1?l1.next:null;
            l2=l2?l2.next:null;
            current_node.next=new ListNode(calculateSum(val1+val2+carry))
            current_node=current_node.next
        }
        if(carry!==0){
            current_node.next=new ListNode(calculateSum(carry))
        }
    }
    return result
}