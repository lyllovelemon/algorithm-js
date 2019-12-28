function defineReactive(data,key,val) {
    observe(val)//递归遍历所有属性
    var dep=new Dep()
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function () {
            if('需要订阅者'){
                dep.addSub(watcher)
            }
            return val
        },
        set:function (newVal) {
            if(val===newVal){
                return
            }
            val=newVal
            console.log('属性'+key+'已经被监听了，现在值为'+newVal.toString())
            dep.notify()
        }
    })

}
function Watcher(vm,exp,cb) {
    this.cb=cb
    this.vm=vm
    this.exp=exp
    this.values=this.get()//将自己添加到订阅者
}
Watcher.prototype={
    update:function () {
        this.run()
    },
    run:function () {
        var value=this.vm.data[this.exp];
        var oldVal=this.value
        if(value!==oldVal){
            this.value=value
            this.cb.call(this.vm,value,oldVal)
        }
    },
    get:function () {
        Dep.target=this
        var value=this.vm.data[this.exp]
        Dep.target=null
        return value
    }
}
function Dep() {
    this.subs=[]
}
Dep.prototype={
    addSub:function (sub) {
        this.subs.push(sub)
    },
    notify:function () {
        this.subs.forEach(function (sub) {
            sub.update()
        })
    }
}
function observe(data) {
    if(!data||typeof data!=='object'){
        return;
    }
    Object.keys(data).forEach(function (key) {
        defineReactive(data,key,data[key])
    })
}
var library= {
    book1: {
        name:""
    },
    book2:''
}
observe(library)
library.book1.name='vue权威指南'
library.book2='没有此书'