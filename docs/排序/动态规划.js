function knapSack(w,val,capacity,n) {
	var T=[]
	for(let i=0;i<n;i++){
		T[i]=[]
		for(let j=0;j<=capacity;j++){
			if(j===0){
				T[i][j]=0
				continue
			}
			//容量小于物品重量
			if(j<w[i]){
				if(i===0){
					T[i][j]=0
				}
				else {
					T[i][j]=T[i-1][j]
				}
				continue
			}
			if(i===0){
				T[i][j]=val[i]
			}
			else {
				T[i][j]=Math.max(val[i]+T[i-1][j-w[i]],T[i-1][j])
			}
		}
	}
	findValue(w,val,capacity,n,T)
	return T
}
function findValue(w,val,capacity,n,T) {
	var i=n-1,j=capacity
	while (i>0&&j>0){
		if(T[i][j]!=T[i-1][j]){
			console.log('选择物品'+i,',重量:',+w[i]+'价值:'+val[i])
			j=j-w[i];
			i--;
		}
		else {
			i--;//如果相等，那么就到i-1行
		}
	}
	if(i==0){
		if(T[i][j]!=0){
			console.log('选择物品'+i,',重量:',+w[i]+'价值:'+val[i])
		}
	}
}
var values=[3,4,5],weights=[2,3,4],capacity=5,n=values.length;
console.log(knapSack(weights,values,capacity,n))