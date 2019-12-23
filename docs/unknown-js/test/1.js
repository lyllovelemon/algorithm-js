/**
 * 10个ajax请求同时发起请求，全部返回展示结果，并且最多允许三次失败
 * 说出设计思路
 */
   //方法一:promise
let errNum=0
 let p=new Promise((resolve,reject)=>{
	if(success){
		resolve(res.data)
	}
	else {
		errNum++;
		if(errNum>3){
			reject(err)
		}
		else {
			resolve(err)
		}
	}
})
Promise.all([p]).then(rs=>{
	console.log('rs',rs)
})

