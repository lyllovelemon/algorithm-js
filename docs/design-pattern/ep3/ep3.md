# 代理模式
## 概念
代理模式是为一个对象提供一个占位符或代用品，以便控制对它的访问。
在生活中很常见，比如，明星都有经纪人作为代理，如果想和明星合作，需要联系他的经纪人，经纪人相当于一个代理。

代理模式的关键是:当用户不方便直接访问一个对象时，可以提供一个替身对象来控制对这个对象的访问，用户实际上
访问的是替身对象。替身对象对请求做出一些处理后，再把请求转交给本体对象。

以小明追女生A为例，他跟女生不熟，恰好认识的B是女生的闺蜜，小明可以通过B给A送花。
在A心情好的时候送花成功率60%，心情不好的时候送花成功率0，小明可以把花给B，让B监听A的心情，在A心情好
的时候把花送出。
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
	 },10000) //假设10秒之后心情好
	}
}
xiaoming.sendFlower(B);
```
## 保护代理和虚拟代理
代理B可以帮A过滤掉一些请求，比如送花的人里年龄太大或没有宝马的，这种请求可以在B中被拒绝掉，这种代理叫保护代理。

另外，假设现实中的花价格不菲，那么我们可以把new Flower的操作交给B执行，这种代理叫虚拟代理。虚拟代理把一些开销很大的对象，
延迟到真正需要它的时候才去创建。
```javascript
function Flower() {}
var B={
	receiveFlower(flower){
		A.listenGoodMood(){//监听A好心情
			var flower=new Flower();//延迟到好心情时创建flower对象
			A.receiveFlower(flower)
		}
	}
}
```

## 虚拟代理实现图片预加载
在实际开发中，图片预加载是一种常见技术。如果直接给某个img标签节点设置src属性，当图片太大或网络状态差时，
图片的位置有段时间是一片空白。为了改善用户体验，我们会用loading占位符，等图片加载好了再把loading去掉。

解决首屏渲染时间过长页面白屏问题:
+ 使用loading占位符
+ 骨架屏(饿了么做法)
+ 菊花图
```javascript
var myImg=(function() {
  var imgNode=document.createElement('img');
  document.body.appendChild(imgNode);
  return{
  	setSrc(src) {
  	  imgNode.src=src
  	}
  }
})();
var proxyImage=(function() {
  var img=new Image;
  img.onload=function() {
    myImg.setSrc(this.src);
  };
  return{
  	setSrc(src){
  		myImg.setSrc('https://github.com/lyllovelemon/loading.gif');
  		img.src=src;
  	}
  }
})
myImg.setSrc('https://github.com/lyllovelemon/test.png');
```
现在我们通过 proxyImage 间接地访问 MyImage。proxyImage 控制了客户对 MyImage 的访问，并
且在此过程中加入一些额外的操作，比如在真正的图片加载好之前，先把 img 节点的 src 设置为
一张本地的 loading 图片

## 单一职责原则
面向对象设计的原则-单一职责原则。

就一个类(对象和函数)而言，应该仅有一个引起它变化的原因。如果一个对象承担了多个职责，这个对象
将变得巨大，引起它变化的原因有多个，会导致脆弱和低内聚的设计。当发生变化时，设计可能遭到意外的
破坏。


