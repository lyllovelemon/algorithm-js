var obj={
    name:'lemon',
    age:24
}
function deepCopy(obj) {
    var result={}
    Object.keys(obj).forEach(key=>{
        if(typeof obj[key]==='object'){
            deepCopy(obj[key])
        }
        else {
            result[key]=obj[key]
        }
    })
    return result
}
let obj2=deepCopy(obj)
obj.name='lyl'
console.log(obj)
console.log(obj2)