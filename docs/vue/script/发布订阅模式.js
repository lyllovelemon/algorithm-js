function Dep() {
    this.subs=[]
}
Dep.prototype={
    addSub:function (sub) {
        this.subs.push(sub)
    },
    notify(){
        this.subs.forEach(function (sub) {
            sub.update()
        })
    }
}
Dep.target=null
function observable(obj){
    if(!obj||typeof obj!=='object'){
        return
    }
    let keys=Object.keys(obj)
    keys.forEach((key)=>{
        defineReactive(obj,key,obj[key])
    })
    return obj;
}
function defineReactive(data,key,val){
    var dep=new Dep()
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get() {
            if(Dep.target){
                dep.addSub(Dep.target)
            }
            return val
        },
        set(newVal) {
            if(newVal===val){
                return
            }
            val=newVal
            dep.notify()
        }
    })
}

function Watcher(vm,exp,cb) {

}