/**
 * 实现JavaScript中Function的bind方法的polyfill
 */
if(!Function.prototype.bind)(function () {
	var slice=Array.prototype.slice;
	Function.prototype.bind=function () {
		var thatFunc=this,thatArg=arguments[0];
		var args=slice.call(arguments,1)
		if(typeof thatFunc!=='function'){
			throw new TypeError('Function.prototype.bind is not callable')
		}
		return function () {
			var funcArgs=args.concat(slice.call(arguments))
			return thatFunc.apply(thatArg,funcArgs)
		}
	
	}
})()