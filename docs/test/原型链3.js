var foo={},F=function () {
    
};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a);//'value a'
console.log(foo.b);//undefined

console.log(F.a);//'value a'
console.log(F.b);//'value b'
