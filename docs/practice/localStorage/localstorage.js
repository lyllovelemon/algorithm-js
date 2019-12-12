// localStorage.setItem('test',1234567);
// let test=localStorage.getItem('test');
// console.log(typeof test,test);//存进去是number，取出来是string
// localStorage['name']='lemon';
// console.log(localStorage['name']);
console.log(parseInt('0.0016')+"%")
// console.log(Date.now());//返回13位时间戳，单位毫秒
// set(key, value, expired)
// {
// 	/**
// 	* set 存储方法
// 	* @ param {String}     key 键
// 	* @ param {String}     value 值，
// 	* @ param {String}     expired 过期时间，以分钟为单位，非必须
// 	**/
// 	let source = this.source;
// 	source[key] = JSON.stringify(value);
// 	if (expired){
// 		source[`${key}__expires__`] = Date.now() + 1000*60*expired
// 	};
// 	return value;
// }