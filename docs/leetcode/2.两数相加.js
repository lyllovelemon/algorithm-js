function listNode(val) {
	this.val=val;
	this.next=null;
}
var addTwoNumbers=function (l1,l2) {
	let val1=[],val2=[];
	if(!l1||!l2){
		return;
	}
	while(l1.next){
		val1.push(l1.next);
	}
	while (l2.next){
		val2.push(l2.next)
	}
	
	var sum=0;
	
};