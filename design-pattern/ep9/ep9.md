# 享元模式
## 概念
享元模式(flyweight)是一种用于性能优化的模式，享元模式的核心是运用共享技术来有效支持大量细粒度的对象。

## 实例
假设有个内衣工厂，目前的产品有50种男士内衣和50种女士内衣，为了推销产品，工厂决定生产一些塑料模特穿上他们的内衣拍广告，
正常情况需要50个男模特和50个女模特，不使用享元模式，程序需要这样写
```ecmascript 6
let Model=function(sex,underwear) {
  this.sex=sex;
  this.underwear=underwear;
};
Model.prototype.takePhoto=function() {
  console.log('sex='+this.sex+'underwear='+this.underwear);
};
for(let i=1;i<=50;i++){
	let maleModel=new Model('male','underwear'+i);
	maleModel.takePhoto();
}
for(let j=1;j<=50;j++){
	let femaleModel=new Model('female','underwear'+j);
	femaleModel.takePhoto();
}
```
我们可以考虑如何优化这个场景，其实男模特和女模特各一个就够了，他们可以分别穿上不同的内衣来拍照。
既然如此，可以把underwear从构造函数中移除，只传入sex参数
```ecmascript 6
let Model=function(sex) {
  this.sex=sex;
};
Model.prototype.takePhoto=function() {
  console.log('sex='+this.sex+'underwear'+this.underwear);
};
let maleModel=new Model('male');
let femaleModel=new Model('female');

for(let i=1;i<=50;i++){
	maleModel.underwear='underwear'+i;
	maleModel.takePhoto();
};
for(let j=1;j<=50;j++){
	femaleModel.underwear='underwear'+j;
	femaleModel.takePhoto();
}

```
由此可见，改进后的代码只需要两个对象便完成了同样的功能。

## 判断条件
区分内部状态和外部状态的规则：
+ 内部状态存储于对象内部
+ 内部状态可以被一些对象共享
+ 内部状态独立于具体的场景，通常不会改变
+ 外部状态取决于具体的场景，并根据场景而变化，外部状态不能被共享
享元模式是一种时间换空间的优化模式

判断是否可以使用享元模式，遵守以下几条规则：
+ 一个程序中用了大量相似对象
+ 由于使用大量对象，造成很大的内存开销
+ 对象的大多数状态可以变为外部状态
+ 剥离出对象的外部状态后，可以用较少的共享对象取代大量对象
