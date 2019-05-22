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