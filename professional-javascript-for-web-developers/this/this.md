# this
谁调用this，this就指向谁
```javascript
function fn() {
  let user='lemon';
  console.log(this.user);
  console.log(this);
}
fn();
```
这段代码this指向的是Window,this.user结果为undefined。
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
  