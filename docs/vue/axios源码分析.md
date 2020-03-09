## 简述axios调用流程
主要是Axios.prototype.request的执行流程
1. 判断config是否是字符串，是则设置url，否则设置config为对象
2. 合并默认参数和用户传递的参数
3. 设置请求method，默认是get方法
4. 将用户设置的请求和响应拦截器、发送请求的dispatchRequest组成promise链，返回promise实例，
保证先执行请求拦截器，然后发送请求，再执行响应拦截器

## 为什么axios既可以当函数调用，也可以当对象使用，比如axios({})、axios.get()
在Axios.prototype.request中第一步的操作是判断config是否为字符串，是则设置config.url,
让axios支持axios('example/url'[,config]),又支持axios({}),否则设置config为空对象

## 有用过拦截器吗，原理是怎样的？
## 有使用过axios的取消功能吗？是怎么实现的？
## 为什么支持浏览器中发送请求也支持node发送请求?
axios中有浏览器和node的请求适配，浏览器的请求是通过XMLHttpRequest()实现