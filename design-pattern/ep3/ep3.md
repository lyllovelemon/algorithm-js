# 代理模式
## 概念
代理模式是为一个对象提供一个占位符或代用品，以便控制对它的访问。
在生活中很常见，比如，明星都有经纪人作为代理，如果想和明星合作，需要联系他的经纪人，经纪人相当于一个代理。

代理模式的关键是:当用户不方便直接访问一个对象时，可以提供一个替身对象来控制对这个对象的访问，用户实际上
访问的是替身对象。替身对象对请求做出一些处理后，再把请求转交给本体对象。

以小明追女生A为例，他跟女生不熟，恰好认识的B是女生的闺蜜，小明可以通过B给A送花。
```ecmascript 6
let Flower=function() {}
let xiaoming={
	sendFlower:function(target) {
	  let flower=new Flower();
	  target.receiveFlower(flower);
	}
};
let B={
	receiveFlower:function(flower) {
		A.listenGoodMood=(function() {
		   A.receiveFlower(flower);
		});
	}
};
let A={
	receiveFlower:function(flower) {
	  console.log('收到花'+flower);
	},
	listenGoodMood:function(fn) {
	 setTimeout(function() {
	   fn();
	 },10000) 
	}
}
xiaoming.sendFlower(B);
```
## 保护代理和虚拟代理
代理B可以帮A过滤掉一些请求，比如送花的人里年龄太大或没有宝马的，这种请求可以在B中被拒绝掉，这种代理叫保护代理。

另外，假设现实中的花价格不菲，因此new Flower是一个昂贵的操作，我们可以把new Flower的操作交给代理B去执行，这种代理叫虚拟代理。

## 虚拟代理实现图片预加载
