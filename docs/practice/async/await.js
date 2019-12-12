// const fetchData1=()=>{
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve('fetch data1')
// 		},1000)
// 	})
// };
// const fetchData2=()=>{
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve('fetch data2')
// 		},1000)
// 	})
// };
// const fetchData3=()=>{
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve('fetch data3')
// 		},1000)
// 	})
// };
// (async()=>{
// 	const fetchData=()=>{
// 		return new Promise((resolve,reject)=>{
// 			setTimeout(()=>{
// 				resolve('fetch data is me')
// 			},1000)
// 		})
// 	};
// 	const awaitWrap=(promise)=>{
// 		return promise.then(data=>[null,data])
// 		   .catch(err=>[err,null])
// 	}
// 	const [err,data]=await awaitWrap(fetchData())
// 	console.log('err',err);
// 	console.log('data',data);
// })();
