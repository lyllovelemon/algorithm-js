
function deepClone(obj,map=new WeakMap()){
    if(typeof obj==='object'){
        let isArray=Array.isArray(obj)
        let result=isArray?[]:{}
        if(map.get(obj)){
            return map.get(obj)
        }
        map.set(obj,result)
        const keys=isArray?undefined:Object.keys(obj)
        forEach(keys||obj,(value,key)=>{
          if(keys){
              key=value
          }
          result[key]=deepClone(obj[key],map)
        })
        return result
    }
    else {
        return obj
    }
    function forEach(array,iterate) {
        let index=-1
        const length=array.length
        while(++index<length){
            iterate(array[index],index)
        }
        return array
    }
}

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};

target.target = target;

console.time();
const result = deepClone(target);
console.timeEnd();

console.time();
const result2 = deepClone(target);
console.timeEnd();

// let obj3=JSON.parse(JSON.stringify(target))
// console.log(obj3)