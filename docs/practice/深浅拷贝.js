var deepClone=(obj)=>{
  let newObj;
  if(typeof obj==='object'&& obj!==null){
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
