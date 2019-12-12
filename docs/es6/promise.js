// const p1=new Promise((resolve,reject)=>{
// 	resolve('hello')
// })
//    .then(result=>result)
//    .catch(e=>e)
// const p2=new Promise((resolve,reject)=>{
// 	throw new Error('报错了')
// })
//    .then(result=>result)
//    .catch(e=>e)
// Promise.all([p1,p2])
//    .then(result=>console.log(result))
//    .catch(e=>console.log(e))


const p=Promise.race([
   fetch('/resource-that-may-take-a-while'),
   new Promise(function (resolve,reject) {
	   setTimeout(()=>reject(new Error('request timeout')),5000)
   })
])
p.then(console.log).catch(console.error)