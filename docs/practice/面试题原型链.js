
Object.prototype.a='Object';
Function.prototype.a='Function';
function Person() {}
var child=new Person();
console.log(Person.a);//"Function"
console.log(child.a);//"Object"
console.log(Person.constructor);//Function
console.log(child.constructor);//Function
console.log(child._proto_);//Object
console.log(child._proto_._proto_);//Object._proto =Object
console.log(child._proto_._proto_.constructor);//
console.log(child._proto_._proto_.constructor.constructor);
console.log(child._proto_._proto_.constructor.constructor.constructor);
