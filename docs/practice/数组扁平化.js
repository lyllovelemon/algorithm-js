//数组扁平化
let ary=[1,[2,[3,4,5]],6];
let str=JSON.stringify(ary);

/**
 * 方法一,使用flat
 * **/
let a=ary.flat(Infinity);
console.log('a--->',a);

/**
 * 方法二，使用replace+正则+split
 * **/
let b=str.replace(/(\[|\])/g,'').split(',');
console.log('b--->',b);

/**
 * 方法三,使用replace+JSON.parse()
 * **/
let three=str.replace(/(\[|\])/g,'');
let arr3='['+three+']';
let c=JSON.parse(arr3);
console.log('c--->',c);

/**
 * 方法四:递归
 * **/
let four=[];
let fn=function (ary) {
	for(let i=0;i<ary.length;i++){
		let item=ary[i];
		if(Array.isArray(ary[i])){
			fn(item)
		}
		else {
			four.push(item)
		}
	}
};
fn(ary);
console.log('four--->',four);

/**
 * 方法五:reduce函数迭代
 * **/
function flatten(ary) {
	return ary.reduce((pre,cur)=>{
		return pre.concat(Array.isArray(cur)?flatten(cur):cur)
	},[]);
}
let five=flatten(ary);
console.log('five------>',five);

/**
 * 方法六:扩展运算符
 * **/
let six=ary;
while(six.some(Array.isArray)){
	six=[].concat(...six)
}
console.log('six---->',six)

