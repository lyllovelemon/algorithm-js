/**
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

 示例:

 输入:

 1 0 1 0 0
 1 0 1 1 1
 1 1 1 1 1
 1 0 0 1 0

 输出: 4

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/maximal-square
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * **/
var maximalSquare=function (matrix) {
    let maxSide=0
    if(!matrix||!matrix.length||!matrix[0].length){
        return maxSide
    }
    let rows=matrix.length,columns=matrix[0].length
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            if(matrix[i][j]==='1'){
                maxSide=Math.max(maxSide,1)
                let currentMaxSide=Math.min(rows-i,columns-j)
                for(let k=1;k<currentMaxSide;k++){
                    let flag=true
                    if(matrix[i+k][j+k]==='0'){
                        break
                    }
                    for(let m=0;m<k;m++){
                        if(matrix[i+k][j+m]==='0'||matrix[i+m][j+k]==='0'){
                            flag=false
                            break
                        }
                    }
                    if(flag){
                        maxSide=Math.max(maxSide,k+1)
                    }
                    else {
                        break
                    }
                }
            }
        }
    }
    var maxSquare=maxSide*maxSide
    return maxSquare
}
