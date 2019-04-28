# 贪心算法
## 概念
贪心算法遵循一种近似解决问题的技术，通过每个局部部分的最优解达到全局最优解。

## 实际案例
### 最少硬币找零问题
```ecmascript 6
function MinCoinChange(coins) {
  let coin =coins;
  this.makeChange=function(amount) {
    let change=[],total=0;
    for(let i=coin.length;i>0;i--){
    	let everyCoin=coin[i];
    	while (total+everyCoin<=amount){
    		change.push(coin);
    		total+=coin;
    	} 
    }
    return change;
  }
}
```