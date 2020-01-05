// function throttle(fn,delay) {
// 	var flag=true
// 	return function () {
// 		if(!flag)return
// 		flag=false
// 		setTimeout(()=>{
// 			fn.apply(this,arguments)
// 			flag=true
// 		},delay)
// 	}
//
//
// }
// function debounce(fn,delay) {
// 	var timer=null;
// 	return function () {
// 		if(timer){
// 			clearTimeout(timer)
// 		}
// 		timer=setTimeout(()=>{
// 			fn.apply(this,arguments)
// 		},delay)
// 	}
// }
// document.onmousemove=debounce(()=>{
// 	console.log('debounce',Date.now())
// },1000)
//节流
function throttle(fn,delay) {
	let timer=null
	return function () {
		if(!timer){
			timer=setTimeout(()=>{
				fn.call(this,arguments)
				timer=null
			},delay)
		}
	}
}

function debounce(fn,delay) {
	let timer=null
	return function () {
		if(timer){
			clearTimeout(timer)
		}
		timer=setTimeout(()=>{
			fn.call(this,arguments)
		},delay)
	}
}