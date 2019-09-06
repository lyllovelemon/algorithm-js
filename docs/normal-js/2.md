# 递归
递归指函数调用自己
```ecmascript 6
function factorial(num) {
  if(num<=1){
      return;
  }
  else {
      return num*factorial(num-1);
  }
}
let anothorFactorial=factorial;
factorial=null;
console.log(anothorFactorial(4));
```
函数会报错，以上代码首先将factorial()函数保存在变量anothorFactorial中，
然后将factorial变量置为null，结果指向原始函数的引用只有一个，在接下来调用anothorFactorial()
时，由于必须执行factorial()，而factorial已经不再是函数，就会导致错误。
这种情况使用arguments.callee可以解决这个问题
>arguments.callee是一个指向正在执行的函数的指针，因此可以用它实现函数的递归调用。
```ecmascript 6
function factorial(num) {
  if(num<=1){
      return;
  }
  else {
      return num*arguments.callee(num-1);
  }
}
let anothorFactorial=factorial;
factorial=null;
console.log(anothorFactorial(4));
```
arguments.callee可以保证无论怎样调用函数都不出错，因此使用递归函数时，用arguments.callee比使用函数名更保险
>注意：严格模式不支持arguments.callee，可以使用命名函数表达式达成相同结果。
```ecmascript 6
let factorial=(function f(num) {
  if(num<=1){
      return;
  }
  else {
      return num * f(num-1);
  }
})
```
