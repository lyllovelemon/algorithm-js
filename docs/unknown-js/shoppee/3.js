/**
 * 使用js实现一个repeat方法
 * function repeat(func,times.wait){},const repeatFunc=repeat(alert,4,3000)
 * 调用这个repeatedFunc("helloworld"),会alert4次helloworld，每次间隔3秒
 */
function repeat(func,times,wait) {
	while (times){
		setTimeout(()=>{
			func()
		},wait)
		times--
	}
}
const repeatFunc=repeat(alert,4,3000)
repeatFunc('helloworld')