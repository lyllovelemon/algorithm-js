class EventEmmitter{
	constructor(){
	this.obj={}
	}
}
EventEmmitter.prototype.on=function (event,callback) {
	if(!event){
		return
	}
	else {
		callback();
	}
	
};
EventEmmitter.prototype.once=function (event,callback) {
	var on=false
	if(event){
		on=true
	}
	if(!on){
	callback();
	}
};
EventEmmitter.prototype.off=function (event) {
	if(event){
	}
};
const event=new EventEmmitter();
const drank=(person)=>{
console.log(person+'喝水');
};
event.on('drank',drank);
event.on('eat',(person)=>{
	console.log(person+'吃东西');
});
event.once('buy',(person)=>{
	console.log(person+'买东西');
});
event.fire('drank','我')//我喝水
event.fire('drank','我')//我喝水
event.fire('eat','其他人');//其他人吃东西
event.fire('eat','其他人');//其他人吃东西
event.fire('buy','其他人');//其他人买东西
event.fire('buy','其他人');//
event.off('eat',);
event.fire('eat','其他人');
