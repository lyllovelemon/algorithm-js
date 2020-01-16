var reverse=function (x) {
     let str=x.toString()
     if(str.length<=1){
         return  x
     }
    let res
    if(x>=0){
        res= x.toString().split('').reverse().join('')
        res=res.charAt(0)==='0'?res.slice(1):res
    }
    else {
        let minu='-'
        res= x.toString().replace('-','').split('').reverse().join('')
        res=res.charAt(0)==='0'?minu+res.slice(1):minu+res
    }
    if(res<=Math.pow(-2,31)||res>Math.pow(2,31)-1){
        return  0
    }
    return res

}
console.log(reverse(1534236469))