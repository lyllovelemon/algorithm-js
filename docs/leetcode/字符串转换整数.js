var myAtoi = function(str) {
   let res=parseInt(str)
    if(res<=Math.pow(-2,31)){
        return Math.pow(-2,31)
    }
    if(res>Math.pow(2,31)-1){
        return Math.pow(2,31)-1
    }
    return isNaN(res)?0:res
};
console.log(myAtoi( "-91283472332"))