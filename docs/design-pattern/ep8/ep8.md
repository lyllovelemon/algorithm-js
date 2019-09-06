# 模板方法模式
## 组成
模板方法模式由两部分结构组成，一部分是抽象父类，另一部分是实现子类。
抽象父类封装了子类的算法框架，包括实现一些公共方法和封装子类所有方法的执行顺序。

## 实例
泡一杯饮料
```ecmascript 6
let Beverage=function() {};//父类-饮料
Beverage.prototype.boilWater=function() {
  console.log('把水煮沸');
}
Beverage.prototype.brew=function() {
  
};//空方法，由子类重写
Beverage.prototype.pourInCup=function() {
  
};//空方法，由子类重写
Beverage.prototype.addCondiments=function() {
  
};
Beverage.prototype.init=function() {
  this.boilWater();
  this.brew();
  this.pourInCup();
  this.addCondiments();
};
let Coffee=function() {};
Coffee.prototype=new Beverage();
Coffee.prototype.brew=function() {
  console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourInCup=function() {
  console.log('把咖啡倒进杯子');
}
Coffee.prototype.addCondiments=function() {
  console.log('加糖和牛奶')
};
let coffee=new Coffee();
coffee.init();

let Tea=function() {};
Tea.prototype=new Beverage();
Tea.prototype.brew=function() {
  console.log('用沸水泡茶叶');
}
Tea.prototype.poutInCup=function() {
  console.log('把茶倒进杯子');
}
Tea.prototype.addCondiments=function() {
  console.log('加柠檬');
}
let tea=new Tea();
tea.init();
```
## 钩子方法
钩子方法可以使子类不受父类方法的约束，放置钩子是一种常见的隔离变化的手段，
我们可以在父类容易发生变化的地方放置钩子，要不要挂钩由子类决定。
```ecmascript 6
let Beverage=function() {};//父类-饮料
Beverage.prototype.boilWater=function() {
  console.log('把水煮沸');
}
Beverage.prototype.brew=function() {
  throw new Error('子类必须重写brew方法');
};
Beverage.prototype.pourInCup=function() {
  throw new Error('子类必须重写pourInCup方法');
};
Beverage.prototype.addCondiments=function() {
  throw new Error('子类必须重写addCondiments方法');
};
Beverage.prototype.customerWantsCondiment=function(){
	return true;
};//默认需要调料(挂钩)

Beverage.prototype.init=function() {
  this.boilWater();
  this.brew();
  this.pourInCup();
  if(this.customerWantsCondiment){
  	 this.addCondiments();
  }
};
let CoffeeWithHook=function() {};
CoffeeWithHook.prototype=new Beverage();
CoffeeWithHook.prototype.brew=function() {
  console.log('用沸水冲泡咖啡');
}
CoffeeWithHook.prototype.pourInCup=function() {
  console.log('把咖啡倒进杯子');
}
CoffeeWithHook.prototype.addCondiments=function() {
  console.log('加糖和牛奶')
};

CoffeeWithHook.prototype.customerWantsCondiment=function(){
	return window.confirm('请问咖啡需要调料吗?')
};
let coffeeWithHook=new CoffeeWithHook();
coffeeWithHook.init();

let Tea=function() {};
Tea.prototype=new Beverage();
Tea.prototype.brew=function() {
  console.log('用沸水泡茶叶');
};
```
