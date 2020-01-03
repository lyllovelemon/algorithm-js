let arr=[1,2]
let m=[
	{id:1,name:'qq'},
	{id:2,name:'dfd'},
	{id:4,name:'happy'}
]
let newArr=[]
arr.forEach(id=>{
	let p=m.find(item=>{
		return item.id===id
	})
	newArr.push(p)
})
console.log(newArr)