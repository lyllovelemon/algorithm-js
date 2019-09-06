# indexDB

## 概念
Json是一种数据格式，不是一种编程语言。虽然具有相同的语法形式，但Json并不从属于Javascript。

## 语法
1.简单值：可以在Json中表示字符串、数值、布尔值和null,但Json不支持undefined。
```
5
```
这是JSON表示数值5的方式。
```
"Hello world"
```
这是JSON表示字符串的方式，注意，JSON必须使用双引号表示字符串，否则会导致语法错误。

2.对象
```
let person={
name:'lemon'
age:22
};
```
这是JavaScript表示对象的方式。

```
{
"name":"lemon",
"age":22
}
```
JSON表示对象的方式与JavaScript有两点不同：
- 没有声明变量(JSON中没有变量的概念)
- 没有末尾的分号

3.数组
```ecmascript 6
[25,"hi",true]
```
>Json不支持函数、变量或对象实例

## 解析与序列化
+ ES6定义了全局对象JSON,IE8以上浏览器支持
+ JSON对象有两个方法:stringify()和parse()

stringify()用于将Javascript对象序列化成JSON对象，
parse()用于把JSON字符串解析为原生Javascript。

### 序列化选项
JSON.stringify()除了要序列化的Javascript对象外，还可以接收另外两个参数，第一个参数是一个过滤器，可以是一个数组，也可以是一个函数。
第二个参数是一个选项，表示是否在JSON字符串中保留缩进。
```ecmascript 6
let book={
    "title":"my lemon book",
    "authors":["lemon"],
    edition:1,
    year:2019
}
let jsonText=book.stringify(book,["title","edition"]);
```
如果过滤器参数是数组，那么JSON.stringify()返回的结果字符串中，只会包含这两个属性:
```
{ "title":"my lemon book","edition":1}
```
如果第二个参数是函数，行为会稍微不同。
```ecmascript 6
let book={
    "title":"my lemon book",
    "authors":["lemon"],
    edition:1,
    year:2019
}
let jsonText=book.stringify(book,function(key,value) {
  switch (key) {
    case "authors":
        return value.join(",")
    case "year":
        return 2020;
    case "edition":
        return undefined;
    default:
        return value;
  }
});
```
注意一定要提供default，此时返回输入的值，以便其他值能正常出现在结果中。
如果返回值为undefined，则表示删除该属性。

序列化的JSON字符串如下所示：
```
{"title":"my lemon book","authors":["lemon"],"year":2020}
```
第三个参数用于控制结果中的缩进和空白符。
```ecmascript 6
let book={
    "title":"my lemon book",
    "authors":["lemon"],
    edition:1,
    year:2019
}
let jsonText=book.stringify(book,null,4);
```
输出的结果如下:
```
book={
    "title":"my lemon book",
    "authors":["lemon"],
    edition:1,
    year:2019
}
```
该结果每行缩进了4个字符，注意最大缩进空格数为10，超过这个数都会自动转换为10。
### 解析选项
JSON.parse()被称为还原函数，表示与上述一致，不再赘述。

