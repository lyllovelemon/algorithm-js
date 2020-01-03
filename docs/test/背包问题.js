function knapSack(w,val,capacity,n){
    var T = []

    for(let i = 0;i < n;i++){
        T[i] = [];
        for(let j=0;j <= capacity;j++){
            if(j === 0){ //容量为0
                T[i][j] = 0;
                continue;
            }
            if(j < w[i]){ //容量小于物品重量，本行hold不住
                if(i === 0){
                    T[i][j] = 0; // i = 0时，不存在i-1，所以T[i][j]取0

                }else{
                    T[i][j] = T[i-1][j]; //容量小于物品重量，参照上一行

                }
                continue;
            }
            if(i === 0){
                T[i][j] = val[i]; //第0行，不存在 i-1, 最多只能放这一行的那一个物品
            }else{
                T[i][j] = Math.max(val[i] + T[i-1][j-w[i]],T[i-1][j]);

            }
        }

    }

    findValue(w,val,capacity,n,T);


    return T;
}


//找到需要的物品
function findValue(w,val,capacity,n,T){

    var i = n-1, j = capacity;
    while ( i > 0 && j > 0 ){

        if(T[i][j] != T[i-1][j]){
            console.log('选择物品'+i+',重量：'+ w[i] +',价值：' + values[i]);
            j = j- w[i];
            i--;
        }else{
            i--;  //如果相等，那么就到 i-1 行
        }
    }
    if(i == 0 ){
        if(T[i][j] != 0){ //那么第一行的物品也可以取
            console.log('选择物品'+i+',重量：'+ w[i] +',价值：' + values[i]);

        }
    }
}

// w = [2,3,4].  val = [3,4,5] , n = 3 , capacity = 5
//function knapSack([2,3,4],[3,4,5],5,3);
//
let values = [3,4,5],
    weights = [2,3,4],
    capacity = 5,
    n = values.length;

console.log(knapSack(weights,values,capacity,n));