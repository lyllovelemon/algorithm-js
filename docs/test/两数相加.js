/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照逆序的方式存储的，并且它们的每个节点只能存储一位数字。
 *如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
**/
function ListNode(val) {
    this.val=val
    this.next=null
}
var addTwoNumber=function (l1,l2) {
    var result=0,current_node=null,carry=0,val1=0,val2=0
    function calculateSum(sum){
        if(sum>=10){
            carry=1
            sum-=10
        }
        else {
            carry=0
        }
        return sum
    }
    if (l1||l2){
        val1=l1?l1.val:0
        val2=l2?l2.val:0
        l1=l1.next?l1.next:null
        l2=l2.next?l2.next:null
        current_node=new ListNode(calculateSum(val1+val2))
        result=current_node
        while(l1||l2){
            val1=l1?l1.val:0
            val2=l2?l2.val:0
            l1=l1.next?l1.next:null
            l2=l2.next?l2.next:null
            current_node.next=new ListNode(calculateSum(val1+val2+carry))
            current_node=current_node.next
        }
        if(carry===1){
            current_node.next=new ListNode(calculateSum(carry))
        }
        return result
    }

}