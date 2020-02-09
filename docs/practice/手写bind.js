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
function shallowCopy(fn){
    return typeof fn==='object'&&fn!==null?{}:[]
}