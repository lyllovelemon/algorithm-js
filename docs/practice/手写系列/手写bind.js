Function.prototype.myBind=function(context,...args){
   const fn=this
    args=args?args:[]
    return function newFn(...newFnArgs) {
        if(this instanceof newFn){
            return new fn(...args,...newFnArgs)
        }
        return  fn.apply(context,[...args,...newFnArgs])
    }
}
let obj={
    a:function(){
        console.log(this)
    }
}
obj.a()

//slice() Object.assign() concat()  ...
function shallowCopy(fn){
    return typeof fn==='object'&&fn!==null?{}:[]
}