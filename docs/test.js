let ary=[1,[2,[3,[4,5]]],6]
let str=JSON.stringify(ary)

console.log(ary.flat(Infinity))
let res2=str.replace(/(\[|\])/g, '').split(',')
let res3=JSON.parse('['+str.replace(/(\[|\])/g,'')+']')
console.log(res2)
console.log(res3)
function flatten(ary) {
	return ary.reduce((pre,cur)=>{
		console.log('pre---',pre,'cur---',cur)
		return pre.concat(Array.isArray(cur)?flatten(cur):cur)
	},[])
}
console.log('flatten',flatten(ary))