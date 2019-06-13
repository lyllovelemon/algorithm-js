/**
 * Created by admin on 2019/5/16.
 * @author lemon<李亦黎>
 */
function foo(num) {
	console.log('foo:'+num);
	foo.count++;
}
foo.count=0;
let i;
for(i=0;i<10;i++){
	if(i>5){
		foo(i);
	}
}
// let obj={
// 	count:0,
// 	cool:function coolFn() {
// 		if(this.count<1){
// 			setTimeout(()=>{
// 				this.count++;
// 				console.log('awesome',this.count);
// 			},100);
// 		}
// 	}
// };
// obj.cool();