+ 解决迁移以后与父项目相互交互通信问题
+ 样式问题

子项目和父项目都有头部和侧边栏，需要隐藏子项目的头部和侧边栏。通过动态类的样式实现，定义两个变量，分别控制侧边栏和头部是否隐藏。
由于是在父项目中iframe引入的子项目，可以在iframe上加search后缀，如?hideTop&hideSideBar

+ 子项目中有大量弹窗dialog，如何控制父项目与子项目遮罩层同步开关

由于dialog使用的是element(v:2.9.1)，查看dialog部分源码，发现其watch里面有个visible变量，visible为true，
弹窗打开，visible为false弹窗关闭。在dsp项目中定义一个mixin重写dialog方法，将控制遮罩层开关变量visible暴露出来.
visible值发生改变，将这个值通过window.parent.postMessage传给父项目.子项目用到dialog的地方都注入此mixin,
根据visible的boolean值开关遮罩层。遮罩层也需要自定义样式

+ 子项目涉及路由跳转到父项目中的别的子项目，路径需要修改

通过location.search判断当前路径，hideTop等值存在,说明是iframe里面的路径，则需要路径拼接，否则返回原本的路径

# 公众号项目
消息管理中，公众号运营人员可以向关注者发送消息，支持文字，图片，语音
+ 如何实现表情包

表情包是一张微信的整图，通过background-position定位，每行显示16个，共6行
+ 表情包点击时如何一个个显示在输入框里

定义一个函数专用于还原文本到页面，根据正则将选中的表情转为img标签，通过v-html属性显示在输入框