# 图
## 定义
图是一组由边连接的节点（顶点），图可以用来表示道路、航班、通信状态。

![图](https://upload-images.jianshu.io/upload_images/77969-7d4a5f4f793b28ca.png)

一个图G = (V, E)由以下元素组成。

V：一组顶点

E：一组边，连接V中的顶点

## 相关术语
相邻顶点：由一条边连接在一起的顶点称为相邻顶点

度：其相邻顶点的数量

路径：路径是顶点v1, v2,…,vk的一个连续序列，其中vi和vi+1是相邻的。
> 简单路径要求不包含重复的顶点。

环也是一个简单路径，比如图1 的 A D C B A

如果图中不存在环，则称该图是无环的。如果图中每两个顶点间都存在路径，则该图是连通的。

## 有向图和无向图
图可以是无向的（边没有方向）或是有向的（有向图）。

![有向图](http://dl2.iteye.com/upload/attachment/0101/1217/834218ff-ccef-38ee-a095-e4e9b5caec67.png '有向图')

如果图中每两个顶点间在双向上都存在路径，则该图是强连通的。例如，2和3是强连通的，
而0和2不是强连通的。

图还可以是未加权的（目前为止我们看到的图都是未加权的）或是加权的。

## 邻接矩阵
图最常见的实现是邻接矩阵。每个节点都和一个整数相关联，该整数将作为数组的索引。我
们用一个二维数组来表示顶点之间的连接。如果索引为i的节点和索引为j的节点相邻，则array[i][j]
=== 1，否则array[i][j] === 0。

## 邻接表
我们也可以使用一种叫作邻接表的动态数据结构来表示图。邻接表由图中每个顶点的相邻顶
点列表所组成。存在好几种方式来表示这种数据结构。我们可以用列表（数组）、链表，甚至是
散列表或是字典来表示相邻顶点列表。

## 图的实现
```ecmascript 6

```
## 图的遍历
+ 深度优先搜索
+ 广度优先搜索

图遍历算法思想：

追踪每个第一次访问的节点，并且追踪有哪些节点还未被完全探索。

1. 深度优先搜索：基于栈，将顶点存入栈中，存在新的相邻顶点就去访问

2. 广度优先搜索(先宽后深)：基于队列，将顶点存入队列中，最先入队列的顶点先访问

### 广度优先搜索
+ 白色：表明该顶点未访问
+ 灰色：表明该顶点被访问过，但未完全访问
+ 黑色：表明该顶点被完全访问
```ecmascript 6
   //广度优先搜索算法
        let initializeColor=function () {
            let color=[];
            for(let i=0;i<verticles.length;i++){
                color[verticles[i]]='white';
            }
            return color;
        }
        this.bfs=function (v,callback) {
            let color=initializeColor(),
                queue=new Queue();
            queue.enqueue(v);

            while (!queue.isEmpty()){
                let u=queue.dequeue();
                neighbors=adjList.get(u);
                color[u]='gray';
                for(let i=0;i<neighbors.length;i++){
                    let w=neighbors[i];
                    if(color[w]==='white'){
                        color[w]='gray';
                        queue.enqueue(w);
                    }
                }
                color[u]='black';
                if(callback){
                    callback(u);
                }
            }
        }
```
### 深度优先搜索
+ 灰色：未发现的
+ 黑色：已发现的
```ecmascript 6
  //深度优先搜索算法
        this.dfs=function (callback) {
            let color=initializeColor();
            for(let i=0;i<verticles.length;i++) {
                if(color[verticles[i]]==='white'){
                    dfsVisit(verticles[i],color,callback)
                }
            }
        }
        let dfsVisit=function (u,color,callback) {
            color[u]='gray';
            if(callback){
                callback(u);
            }
            let neighbors=adjList.get(u);
            for(let i=0;i<neighbors.length;i++){
                let w=neighbors[i];
                if(color[w]==='white'){
                    dfsVisit(w,color,callback);
                }
            }
            color[u]='black';
        }
```
### 拓扑排序 topsort

当我们需要编排一些任务或步骤的执行顺序时，这称为拓扑排序
