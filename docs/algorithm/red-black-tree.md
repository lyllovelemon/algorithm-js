# 红黑树
## 定义
红黑树是二叉查找树的一种，但在每个节点上增加一个存储位表示节点颜色，可以为红或黑。

满足条件：
+ 每个节点不是红的就是黑的
+ 根节点是黑的
+ 每个叶节点都是黑的
+ 如果一个节点为红的，那它两个儿子都是黑的
+ 对于任意节点而言，其到叶节点尾端指针的每条路径都包含相同数目的黑节点。
> 上述条件保证了红黑树的查找、插入、删除的时间复杂度最坏为O(log n)



