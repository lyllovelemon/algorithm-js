/**
 * 最小硬币找零问题
 * change 要找零的钱数额
 * coins 找零零钱列表
 * queue 找零顺序列表
 * num 硬币个数
 * @author lemon
 */

function minCoinChange(coins) {
 let coin=coins;
 let cache={};
 /**
  * makeChange执行完成后，返回一个数组，表示用来找零的各个面额的硬币数量(最少硬币数)
  * **/
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
let mincoinchange=new minCoinChange([1,5,10,25]);
console.log(mincoinchange.makeChange(36));