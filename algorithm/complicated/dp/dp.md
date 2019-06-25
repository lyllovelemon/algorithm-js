# 动态规划
## 概念
动态规划是一种将复杂问题分解成更小的子问题来解决的优化技术。

>动态规划与分而治之不同，前者将问题分解为相互依赖的子问题，后者将问题分解为独立的子问题。

## 实际案例
* 背包问题
* 最长公共子序列
* 图的全源最短问题
* 斐波那契问题
### 最少硬币找零问题
最少硬币找零问题是硬币找零问题的一个变种。硬币找零问题是给出要找零的钱数，以及可
用的硬币面额d1…dn及其数量，找出有多少种找零方法。最少硬币找零问题是给出要找零的钱数，
以及可用的硬币面额d1…dn及其数量，找到所需的最少的硬币个数。
```ecmascript 6
function minCoinChange(coins) {
 let coin=coins;
 let cache={};
 this.makeChange=function (amount) {
	 let me=this;
	 //面额是否为正数
	 if(!amount){
	 	return [];
	 }
	 //是否有缓存
	 if(cache[amount]){
	 	return cache[amount];
	 }
	 let min=[],newMin,newAmount;
	 for(let i=0;i<coin.length;i++){
	 	let Coin=coin[i];
	 	newAmount=amount-Coin;
	 	if(newAmount>=0){
	 		newMin=me.makeChange(newAmount);
		}
	 	//判断newAmount是否有效(为正数),minValue(最少硬币数)是否为最优解
	 	if(newAmount>=0&& (newMin.length<min.length-1||!min.length)&&(newMin.length||!newAmount)){
	 		min=[Coin].concat(newMin);
	 		console.log('new Min '+min+" for"+amount);
		}
	 }
	 return (cache[amount]=min);
 }
}
```