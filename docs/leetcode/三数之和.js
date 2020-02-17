// var threeSum = function (nums) {
//     let res = []
//     let length = nums.length;
//     nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
//     if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
//         for (let i = 0; i < length - 2;) {
//             if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
//             let first = i + 1
//             let last = length - 1
//             do {
//                 if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
//                 let result = nums[i] + nums[first] + nums[last]
//                 if (result === 0) { // 如果可以组队
//                     res.push([nums[i], nums[first], nums[last]])
//                 }
//                 if (result <= 0 ) { // 实力太弱，把菜鸟那边右移一位
//                     while (first < last && nums[first] === nums[++first]){} // 如果相等就跳过
//                 } else { // 实力太强，把大神那边右移一位
//                     while (first < last && nums[last] === nums[--last]) {}
//                 }
//             } while (first < last)
//             while (nums[i] === nums[++i]) {}
//         }
//     }
//     return res
// }

// var threeSum=function(nums){
//     let result=[],len=nums.length,flag=0,hash={}
//     nums.sort((a,b)=>{
//         return a-b
//     })
//     if(nums[0]>0||nums[len-1]<0) return result
//     for(let i=0;i<len;i++){
//         if(nums[i]===nums[i-1])continue
//         flag=0-nums[i]
//         let start=i+1,end=len-1
//         while(start<end){
//             let middle=[]
//             if(nums[start]+nums[end]<flag){
//                 start++
//             }
//             else if(nums[start]+nums[end]>flag){
//                 end--
//             }
//             else {
//                 middle.push(nums[i],nums[start],nums[end])
//                 if(!hash[middle]){
//                     hash[middle]=true
//                     result.push(middle)
//                 }
//                 start+=1
//                 end-=1
//                 while(start<end&&nums[start]===nums[start+1]){
//                     start+=1
//                 }
//                 while (start<end&&nums[end]===nums[end+1]){
//                     end-=1
//                 }
//             }
//
//         }
//     }
//     return  result
// }
console.log(threeSum([-1,0,1,2,-1,-4]))

// var twoSum=function (nums,target) {
//     let res={}
//     for(let i=0;i<nums.length;i++){
//         if(res[nums[i]]){
//             return [nums[i],res[nums[i]]]
//         }
//         else {
//             res[target-nums[i]]=nums[i]
//         }
//     }
// }
// console.log(twoSum([-1,0,2,2,2,4,3],1))

