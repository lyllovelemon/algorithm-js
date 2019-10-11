function myPromise(executor){
	let self=this;
	self.value=undefined;
	self.reason=undefined;
	self.status='pending';
	
	self.onResolvedCallbacks=[];
	self.onRejectedCallbacks=[];
	function resolve(value){
		if(self.status==='pending'){
			self.value=value;
			self.status='resolved';
			self.onResolvedCallbacks.forEach(fn=>{
				fn();
			})
		}
		
	}
	function reject(reason){
		if(self.status==='pending'){
			self.reason=reason;
			self.status='rejected';
			self.onRejectedCallbacks.forEach(fn=>{
				fn();
			})
		}
		
	}
	executor(resolve,reject)
}
myPromise.prototype.then=function (onFulfilled,onRejected) {
	let self=this;
	let promise2=new myPromise(function (resolve,reject) {
		if(self.status==='resolved'){
			try {
				let x=onFulfilled(self.value);
				resolve(x)
			}
			catch (e) {
				reject(e)
			}
		
		}
		if(self.status==='rejected'){
			try{
				let x=onRejected(self.reason);
				resolve(x)
			}
			catch (e) {
				reject(e)
			}
		
		}
		if(self.status==='pending'){
			self.onResolvedCallbacks.push(function () {
				try {
					let x=onFulfilled(self.value)
					resolve(x)
				}
				catch (e) {
					reject(e)
				}
				
			});
			self.onRejectedCallbacks.push(function () {
				try {
					let x=onRejected(self.reason);
					resolve(x)
				}
				catch (e) {
					reject(e)
				}
				
			});
		}
	})
	return promise2;
};
let p=new myPromise(function (resolve,reject) {
	console.log('start');
	resolve('data1')
});
p.then(
   (v)=>{
	console.log('success'+v)
	},
   (v)=>{
   	console.log('error'+v)
   }
);
console.log('end');