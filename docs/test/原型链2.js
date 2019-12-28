var F = function() {};

Object.prototype.a = function() {
    console.log('a');
};

Function.prototype.b = function() {
    console.log('b');
}

var f = new F();

f.a();//'a'
f.b();

F.a();//'a'
F.b();//'b'

function Person(name) {
    this.name = name
}
let p = new Person('Tom');
console.log(p._proto_)//Person
console.log(Person._proto_)//Object
