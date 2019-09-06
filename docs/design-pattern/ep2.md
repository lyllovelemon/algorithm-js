# 策略模式
## 定义
定义一系列的算法，把它们一个个封装起来，并使它们可以相互替换。

## 奖金计算
比如年终奖发放，绩效为S的人年终奖是4倍工资，绩效为A的人年终奖是3倍工资，而绩效为B的人年终奖是2倍工资。
```ecmascript 6
let calculateBonus=function(level,salary) {
  if(level==='S'){
  	return salary*4;
  }
  if(level==='A'){
  	return salary*3;
  }
  if(level==='B'){
  	return salary*2;
  }
}
calculateBonus('B',10000);
calculateBonus('s',9000);
```
该方法实现简单，但存在许多缺点：
复用性差，如果有个C绩效，或者想把S绩效的奖金系数改为5，那我们需要修改calculateBonus函数内部实现，这是违反开放-封闭原则的。
可以使用组合函数封装
```ecmascript 6
let performanceS=function(salary) {
  return salary*4;
}
let performanceA=function(salary) {
  return salary*3;
}
let performanceB=function(salary) {
  return salary*2;
}
let calculateBonus=function(level,salary) {
  if(level==='S'){
  	return performanceS(salary);
  }
  if(level==='A'){
  	return performanceA(salary);
  }
  if(level==='B'){
  	return performanceB(salary);
  }
}
```
程序得到了一定程度改善，但calculateBonus仍然有可能继续增大，而且在系统变化时缺乏弹性。
我们可以使用策略模式重构代码,将不变的部分和变化的部分分开是每个设计模式的主题。

 一个基于策略模式的程序至少由两部分组成。第一个部分是一组策略类，策略类封装了具体
     的算法，并负责具体的计算过程。第二个部分是环境类 Context，Context 接受客户的请求，随后
     把请求委托给某一个策略类。要做到这点，说明 Context 中要维持对某个策略对象的引用。   
```ecmascript 6
let performaceS=function() {};
performaceS.prototype.calculate=function(salary) {
  return salary*4;
}
let performanceA=function() {};
performanceA.prototype.calculate=function(salary) {
  return salary*3;
}
let performanceB=function() {};
performanceB.prototype.calculate=function(salary) {
  return salary*2;
}
//定义奖金类
let Bonus=function() {
  this.salary=null;//原始工资
  this.strategy=null;//绩效等级对应的策略对象
}
Bonus.prototype.setSalary=function(salary) {
  this.salary=salary;
};
Bonus.prototype.setStrategy=function(strategy) {
  this.strategy=strategy;
};
Bonus.prototype.getBonus=function() {
  return this.strategy.calculate(this.salary);
}
let bonus=new Bonus();
bonus.setSalary(10000);//设置基本工资
bonus.setStrategy(new performaceS());//设置奖金策略

console.log(bonus.getBonus());
```
还有一种更简单直接的方法，就是把strategy直接定义为函数。
```ecmascript 6
let strategy={
	"S":function(salary) {
	  return salary*4;
	},
	"A":function(salary) {
	  return salary*3;
	},
	"B":function(salary) {
	  return salary*2;
	}
};
let calculateBonus=function(level,salary) {
  return strategy[level](salary);
};
console.log('S',20000);
console.log('A',10000);
```
## 优缺点
+ 策略模式利用组合、委托和多态的概念，可以有效避免多重条件语句
+ 提供对开放-封闭模式的完美支持，可扩展性强
+ 可复用性强
+ 是继承的一种更轻便的替代方案

缺点是需要暴露所有方法