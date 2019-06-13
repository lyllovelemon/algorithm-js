# this
谁调用this，this就指向谁

```javascript
let o={
    	user:'lemon',
        fn:function () {
            console.log(this.user);
            console.log(this);
		}
    }
 o.fn();
```
此时this指向的是对象o，因为调用的fn是通过o.fn()执行的，自然指向是o。

```javascript
let o={
    	a:10,
        b:{
    		a:12,
            fn:function () {
                console.log(this.a);
			}
        }
    }
    o.b.fn();//12
```

## this绑定规则
### 默认绑定
```javascript
function fn() {
  let user='lemon';
  console.log(this.user);
  console.log(this);
}
fn();
```
这段代码this指向的是Window,this.user结果为undefined。
>注意：严格模式下this指向undefined

### 隐性绑定
```javascript
function foo() {
  console.log(this.name);
}
let user={
	name:'lemon',
	foo:foo
}
foo();//undefined
user.foo();//lemon
```
函数foo执行的时候有了上下文对象user,这种情况下，函数里的this默认绑定为上下文对象，
即lemon
>隐性绑定上下文必须包含我们的函数,let user={foo:foo},否则报错
  
 ### call apply bind
 call和apply都可以改变this的指向；call接收普通参数，apply接收数组
 ```javascript
function foo(a,b) {
  console.log(a+b);
}
foo.call(null,'lemon','yuki');//lemonyuki 这里this指向不重要就写null了
foo.apply(null,['lemon','yuki']);
```
bind也可以改变this指向，但跟call,apply用法不同。
bind只有一个函数，且不会立即执行，只是将一个值绑定到函数的this上，并将绑定后的函数返回。
```javascript
function foo() {
  console.log(this.a);
}
let obj={a:10};
foo=foo.bind(obj);
foo();//10
```
### new
new的作用是创建一个新的对象，js中只要使用new修饰的函数就是构造函数，
准确来说是函数的构造调用，因为js中不存在所谓的构造函数。
new以后js的工作:
1. 创建一个新对象
2. 把这个新对象的_proto_属性指向原函数的prototype属性。（继承原函数的原型）
3. 将这个新对象绑定到此函数的this上
4. 返回新对象，如果这个函数没有返回其他对象
```javascript
function foo() {
  this.a=10;
  console.log(this);
}
foo();//window对象
console.log(window.a);//10

let obj=new foo();
console.log(obj.a);//10
```
>如果原函数返回一个对象类型，那么将无法返回新对象,你将丢失绑定的新对象
```javascript
function foo() {
  this.a=10;
  return new String('lemon');
}
let obj=new foo();
console.log(obj.a);//undefined
console.log(obj)//lemon
```