/**
 * Created by admin on 2019/5/7.
 * @author lemon<李亦黎>
 */
/**前置通知**/
Function.prototype.before=function (beforefun) {
	let _origin=this;//保存原函数引用
	return function () {
		beforefun.apply(this,arguments);
		return _origin.apply(this,arguments);
	}
	
}