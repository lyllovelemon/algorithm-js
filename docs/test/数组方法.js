let array=[,1,,2,,3];
let arr=array.map((i)=>{
    ++i
})
console.log('map',arr)
let arr2=array.forEach((i)=>{
    ++i;
})
console.log('forEach',arr2)
let arr3=array.filter((i)=>{
    i++
})
console.log('filter',arr3)
let arr4=array.some((i)=>{
    i++
})
console.log('some',arr4)
let arr5=array.every((i)=>{
    i++
})
console.log('every',arr5)
let arr6=array.reduce((i)=>{
    i++
})
console.log('reduce',arr6)

let join=array.join((i)=>{
    i++
})
console.log('join',join)

