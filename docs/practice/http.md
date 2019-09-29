http常见问题
## http1.0,http1.1,http2.0的区别?

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

## http2.0的优缺点

## js的call、apply、bind的区别
三者都能实现属性和方法的继承，改变函数执行的上下文，即改变函数运行时this的指向。
+ call接收参数列表，apply接收参数数组，bind不兼容IE6~8
+ call和apply改变了this的上下文便执行该函数，而bind是返回改变了上下文的一个函数

应用：
+ 可以把伪数组转为数组
+ call，apply实现继承
+ 数组拼接、添加
+ 判断变量类型
+ 多继承

## var,const,let区别
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
## 介绍盒子模型
盒子模型包括:content、margin、border、padding几个要素
IE盒子模型:width=content+padding*2
w3c盒子模型:width=content
可以通过css3属性box-sizing对两种盒子模型进行转换:IE盒子模型(border-box),标准盒子模型(content-box)

## 谈谈对BFC的理解
常见定位方案:
1. 普通流定位
普通流定位是根据元素在html的位置来定位的，行内元素在同一行内，直到该行放不下换行。块级元素独占一行。

2. 浮动定位
浮动定位是在普通流的基础上元素向左或者向右偏移。(float不为none时触发)

3. 绝对定位
position:absolute时使用绝对定位，元素会脱离普通流。不管它怎么定位都不会对兄弟元素产生影响。
绝对定位的元素位置由最近的已经定位的祖先元素决定.


BFC:块级格式化上下文，BFC决定了元素如何对内容定位，以及与其他元素的关系和相互作用。
可以把BFC看作独立的箱子，里面的元素如何翻江倒海都不会影响到外面的元素

如何创建BFC:
1.overflow不为visible;
2.float的值不为none；
3.position的值不为static或relative；
4.display属性为inline-block,table,table-cell,table-caption,flex,inline-flex;

BFC应用：
1. 可以阻止元素被浮动元素遮挡或覆盖
```html
<div style="width:100px;height:100px;float: left;background: lightblue">我是一个左浮动元素</div>
<div style="width: 200px;height: 200px;background: #2E8DFF;color: #ffffff">我是一个没有设置浮动, 
          也没有触发 BFC 元素,width: 100px;height: 100px;background: #2E8DFF;color: #ffffff</div>

```
2. 同一个BFC下外边距会被折叠
3. BFC可以包含浮动的元素(清除浮动)

## vue v-on常用修饰符
1. .once:事件只调用一次
2. .prevent:阻止事件默认行为，等于event.preventDefault()
3. .self:只有定义在事件绑定的元素上才被触发，但是仍然会冒泡
4. .native:给自定义的根元素定义一个原生事件，通常用于自定义组件。如果给一个普通的html元素添加.native,那么该html元素
无法监听到事件
5. .stop:阻止事件冒泡,等于调用event.stopPropagation()方法。当元素添加了.stop修饰符，调用click
事件时，事件不会向上冒泡，即父元素不会调用click事件。
6. .capture:让事件从监听变成捕获。当元素添加了.capture修饰符时，父元素的click事件会先触发，然后触发子元素
的click事件。


