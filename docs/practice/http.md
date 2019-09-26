http常见问题
1. http1.0,http1.1,http2.0的区别?

http1.0和http1.1的区别：
+ 长连接:http1.0浏览器和服务器只保持短暂连接，http1.1支持长连接(持久连接)
+ 错误通知管理:http1.1新增了24个错误状态码
> 409-请求资源与资源的当前状态产生冲突
410-服务器的某个资源被永久删除
+ 带宽优化:http1.0请求所有资源，http1.1允许请求资源的某个部分
+ 缓存处理:http1.0使用header的If-Modified-Since和expires作为缓存判断的标准，http1.1引入了
更多缓存处理策略:Entity Tag、If-Unmodified-Since、If-Match、If-NonMatch
+ host头处理:http1.0请求信息不传递主机名，http1.1请求信息和响应信息支持host头域

http1.1和http2.0的区别:
+ http1.1基于文本解析，基于文本解析的格式解析存在天然缺陷，做不到健壮性。http2.0增加了一个二进制分帧，
实现方便且健壮
+ http1.1不支持多路复用，http2.0支持多路复用
+ http1.1的header带有大量信息且未压缩，http2.0使用encoder减少需要传输的header大小，通讯双方各cache一份
header fields表，既避免了header重复传输，又减少了传输大小。
+ http2.0具有服务端推送能力

2. http2.0的优缺点

3. js的call、apply、bind的区别
三者都能实现属性和方法的继承，改变函数执行的上下文，即改变函数运行时this的指向。
+ call接收参数列表，apply接收参数数组，bind不兼容IE6~8
+ call和apply改变了this的上下文便执行该函数，而bind是返回改变了上下文的一个函数

应用：
+ 可以把伪数组转为数组
+ call，apply实现继承
+ 数组拼接、添加
+ 判断变量类型
+ 多继承

4. var,const,let区别
+ var是es5语法，用于定义一个全局变量,const,let都是es6写法,const用于定义常量，let用于定义变量
+ var存在变量提升,let先定义后声明存在暂时性死区，会报referenceError
+ const一旦定义不可修改，但是引用类型可以修改
+ let绑定在块作用域里，var在全局作用域
+ 在for循环里，let会为每一次循环创建新的绑定
```javascript
a=1
var a;
console.log(a);//1

b=2;
let b;
console.log(b);//referenceError
```
5. 介绍盒子模型
盒子模型包括:content、margin、border、padding几个要素
IE盒子模型:width=content+padding*2
w3c盒子模型:width=content
可以通过css3属性box-sizing对两种盒子模型进行转换:IE盒子模型(border-box),标准盒子模型(content-box)

6. 谈谈对BFC的理解
BFC:块级格式化上下文，BFC决定了元素如何对内容定位，以及与其他元素的关系和相互作用

如何创建BFC:
1.overflow不为visible;
2.float的值不为none；
3.position的值不为static或relative；
4.display属性为inline-blocks,table,table-cell,table-caption,flex,inline-flex;


