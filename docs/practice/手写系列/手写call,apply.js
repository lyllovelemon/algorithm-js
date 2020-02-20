
Function.prototype.myCall=function(context,...args){
    context=context||window
    args=args?args:[]
    const key=Symbol()
    context[key]=this
    const result=context[key](...args)//通过隐式绑定的方式调用函数
    delete context[key]//删除添加的属性
    return result//返回函数调用的返回值
}
let name='hello'
let obj={
    name:'lemon',
    getName(){
        return this.name
    }
}
let obj2={
    name:'qq'
}
/**
 * context this上下文
 * args 参数数组
 * **/
Function.prototype.myApply=function(context,args){
    context=context||window
    args=args||[]
    const key=Symbol()
    context[key]=this
    const result=context[key](...args)
    delete context[key]
    return result
}
console.log(obj.getName.myCall(obj2,['world']))
//https://juejin.im/post/5d2ddd9be51d4556d86c7b79#heading-9