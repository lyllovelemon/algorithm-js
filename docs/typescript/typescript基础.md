# typescript基础
## 函数
typescript的函数支持默认参数和可选参数
### 带默认值参数和可选参数
+ 我们可以用?实现可选参数，可选参数必须再必须参数后面，带默认值的参数不一定要在必须参数后面。
如果带默认值的参数在必须参数前面，可以输入undefined来获得默认值
```typescript
function buildName(firstName="Will",lastName:string) {
        return firstName+" "+lastName;

}
let result1=buildName("Bob","Smith");
console.log(result1)
let result2=buildName("Lemon",undefined)
console.log(result2)
let result3=buildName(undefined,"Adams")
console.log(result3)
```
### 剩余参数
剩余参数会被当做个数不限的可选参数，可以没有参数，也可以是任意个参数,通过
...表示
```typescript
function buildName(firstName:string,...restOfName:string[]) {
        return firstName+" "+restOfName.join(" ");

}
let employee=buildName("Bob","Smith","Dr");
console.log(employee)
```