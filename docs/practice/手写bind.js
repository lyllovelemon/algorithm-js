// Function.prototype.bind=function(context,...args){
//     if(typeof this!=='function'){
//         throw new Error("bind is not callable")
//     }
//     var self=this
//     var fNop=function(){}
//     var fbound=function(){
//         self.apply(this instanceof self?
//             this:context,args.concat(Array.prototype.slice.call(arguments)))
//     }
//     fNop.prototype=this.prototype
//     fbound.prototype=new fNop()
//     return fbound
// }
let obj={
    a:function(){
        console.log(this)
    }
}
obj.a()

//slice() Object.assign() concat()  ...
function shallowCopy(obj){
    if(typeof obj==='object'&&obj!==null){
        const cloneObj=Array.isArray(obj)?[]:{}
        for(let item in obj){
            if(obj.hasOwnProperty(item)){
                cloneObj[item]=obj[item]
            }
        }
        return cloneObj
    }
    else{
        return obj
    }
}