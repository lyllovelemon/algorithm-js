# 树
## 概述
树是一种非顺序数据结构，它对于存储需要快速查找的数据有用。
## 相关概念
+ 一个树结构包含一系列存在父子关系的节点，每个节点都有一个父节点(除了顶部的第一个节点)和零个或多个子节点。

+ 根节点：树顶部的第一个节点叫根节点。

+ 内部节点：至少有一个子节点的节点叫内部节点。

+ 叶节点：没有子元素的节点叫叶节点（外部节点）。

一个节点可以有祖先和后代，祖先包括父节点、祖父节点、曾祖父节点......
后代包括子节点、孙子节点、曾孙子节点......

+ 深度：节点的深度取决于它的祖先节点的数量。

+ 高度：树的高度取决于所有节点深度的最大值。

## 二叉树和二叉搜索树
### 概念
二叉树的节点只能有两个子节点：一个是左侧子节点，一个是右侧子节点。

二叉搜索树是二叉树的一种，但是它只允许在左侧节点存储比父节点小的值，在右侧节点存储大于或等于父节点的值。

### 创建二叉搜索树
```ecmascript 6
function BinarySearchTree() {
  let node=function(key) {
    this.key=key;
    this.left=null;
    this.right=null;
  }
  let root=null;
}
```
和链表一样，指针可以表示节点之间的关系(术语称为边)。在双向链表中，每个节点包含两个指针，一个指向下一个节点，另一个指向上一个节点。
树的一个指针指向左侧子节点，另一个指向右侧子节点，在树中，键是节点的代名词。

```ecmascript 6

```
## 树的遍历
### 中序遍历
中序遍历是一种从以最小到最大的顺序访问所有节点的方式。

左子树 -> 根节点 ->右子树

实现如下：
```ecmascript 6
this.inOrderTraverse=function (callback) {
        inOrderTraverseNode(root,callback);
    };
      
let inOrderTraverseNode=function (node,callback) {
            if(node!==null){
                inOrderTraverseNode(node.left,callback);
                callback(node.key);
                inOrderTraverseNode(node.right,callback);
            }
        };
```      
 inOrderTraverse方法接收一个回调函数做参数，回调函数用于定义我们遍历到每个节点的操作(访问者模式)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
### 先序遍历
先序遍历是祖先优先于后代节点的顺序访问的。
根节点->左子树->右子树
实现如下：
```ecmascript 6
 this.preOrderTraverse=function (callback) {
        preOrderTraverseNode(root,callback);
    };

    let preOrderTraverseNode=function (node,callback) {
        if(node!==null){
            callback(node.key);
            preOrderTraverseNode(node.left,callback);
            preOrderTraverseNode(node.right,callback);
        }
    };
```
### 后序遍历
后序遍历则是先访问节点的后代节点，再访问节点本身。

左子树->右子树->根节点

实现如下：
```ecmascript 6
 this.postOrderTraverse=function (callback) {
        postOrderTraverseNode(root,callback);
    };

    let postOrderTraverseNode=function (node,callback) {
        if(node!==null){
            postOrderTraverseNode(node.left,callback);
            postOrderTraverseNode(node.right,callback);
            callback(node.key);
        }
    };
```
## 搜索树中的值
### 搜索最小值和最大值
```ecmascript 6
    this.min=function () {
        return minNode(root);
    };
    let minNode=function (node) {
        if(node){
            while (node && node.left!==null){
                node=node.left;
            } 
            return node.key;
        }
        return null;
    }
```
调用minNode方法传入树的根节点，以便查找整棵树的最小键。用相似的方式，可以实现max方法。
```ecmascript 6
  this.max=function () {
        return maxNode(root);
    };

    let maxNode=function (node) {
        if(node){
            while (node && node.right!=null){
                node=node.right;
            } 
            return node.key;
        }
        return null;
    };
```
对于寻找最小值，总是沿着树的左边；寻找最大值，总是沿着树的右边。
