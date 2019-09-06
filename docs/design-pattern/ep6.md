# 命令模式
## 概念
命令模式常见应用场景：有时不知道请求的接收者和被请求的操作是什么，
需要请求发送者和接收者解除彼此的松耦合关系，可以使用命令模式。

## 实例
复杂项目让某个程序员绘制一些按钮，另一个程序员负责点击按钮后的具体行为
>具体代码实现参考ep6.html

闭包可看为命令模式的一种实现，接收者被封闭在闭包产生的环境，执行命令更简单，直接执行回调函数即可。
无论接收者被保存为对象的属性还是被封闭在闭包产生的环境中，将来执行命令时，
接收者都能被顺利访问。
```ecmascript 6
let setCommand=function(button,command) {
  button.onclick=function() {
    command.execute();
  }
};
let MenuBar={
	refresh:function() {
	  console.log('刷新菜单界面');
	}
};
let RefreshMenuBarCommand=function(receiver) {
  return {
  	execute:function(){
  	receiver.refresh();	
  	}
  }
};
let refreshMenuBarCommand=RefreshMenuBarCommand(MenuBar);
setCommand(btn1,refreshMenuBarCommand);

```