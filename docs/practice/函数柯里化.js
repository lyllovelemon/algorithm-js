// const curry=(fn,arr=[])=>{
// 	return(...args)=>{
// 		//判断参数总数和fn参数个数是否相等
// 		if([...arr,...args].length===fn.length){
// 			return fn(...arr,...args)//相等则执行fn
// 		}
// 		else {
// 			//否则返回一个新的curry函数，将现有的参数塞给他
// 			return curry(fn,[...arr,...args])
// 		}
// 	}
// };
// const curry=(fn,arr=[])=>(...args)=>( (a,b)=>b.length===0?fn(...a):curry(fn,a))([...arr,...args]);//把arr和args摊开为一个数组赋给a(立即执行函数)
// let curryPlus=curry((...x)=>x.reduce((a,b)=>a+b));
// curryPlus(5)(4);

const curry=(fn,arr=[])=> (...args)=>(a=> a.length===fn.length? fn(...a):curry(fn,[...a]))([...arr,...args]);
let curryPlus=((a,b,c,d)=>a+b+c+d);

