//暴力法
var maxArea=function (height) {
    let area=0
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            console.log('i:',i,'j:',j,height[i],height[j],'min',Math.min(height[i],height[j]),'j-1:',j-1,'area',area)
            area=Math.max(area,Math.min(height[i],height[j])*(j-1))
        }
    }
    return area
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))