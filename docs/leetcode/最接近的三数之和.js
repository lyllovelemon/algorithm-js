var threeSumClosest = function(nums, target) {
    let len=nums.length,hash={},result=[],sum=0
    nums.sort((a,b)=>a-b)
    if(nums[0]>target)
    for(let i=0;i<len;i++){

        if(hash[i]){
            result.push(nums[i].concat(hash[i]))
            sum=result.reduce((prev,cur)=>prev+cur)
        }
        else {

        }
    }
    return sum
};
threeSumClosest([-1,2,1,-4])