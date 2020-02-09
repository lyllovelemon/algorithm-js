Function.prototype.call=function(context){
    let context=context||window
    let fn=Symbol('fn')
    context.fn=this

    let result=eval('context.fn(...args)')
    delete context.fn
    return result
}
Function.prototype.apply=function(context,args){
    let context=context||window
    context.fn=this
    let result=eval('context.fn(...args)')
    delete context.fn
    return result
}