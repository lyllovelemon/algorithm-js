function throttle(fn,delay) {
	var flag=true
	return function () {
		if(!flag)return
		flag=false
		setTimeout(()=>{
			fn.apply(this,arguments)
			flag=true
		},delay)
	}
	
	
}
function debounce(fn,delay) {
	var timer=null;
	return function () {
		if(timer){
			clearTimeout(timer)
		}
		timer=setTimeout(()=>{
			fn.apply(this,arguments)
		},delay)
	}
}
document.onmousemove=debounce(()=>{
	console.log('debounce',Date.now())
},1000)
// document.onmousemove=throttle(()=>{
// 	console.log('throttle',Date.now())
// },1000)