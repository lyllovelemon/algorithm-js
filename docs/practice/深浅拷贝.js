function shallowCopy(obj){
	if(typeof obj==='function'&& obj!==null){
		let cloneObj=Array.isArray(obj)?[]:{}
		for(let prop in obj){
			if(obj.hasOwnProperty(prop)){
				cloneObj[prop]=obj[prop]
			}
		}
		return cloneObj
	}
	else{
		return obj
	}
}

var deepClone=(obj,map=new WeakMap())=>{
  if(map.get(obj)){
	  return obj
  }

  let newObj;
  if(typeof obj==='object'&& obj!==null){
	  map.set(obj,true)
  	newObj=Array.isArray(obj)?[]:{};
  	for(let item in obj){
  		if(obj.hasOwnProperty(item)){
  			newObj[item]=deepClone(obj[item])
		}
	}
  	return newObj;
  }
  else {
  	return obj;
  }
};
let arr=[1,2,3];
let ary=deepClone(arr);
ary[2]=6;
console.log('arr',arr);
console.log('ary',ary);
