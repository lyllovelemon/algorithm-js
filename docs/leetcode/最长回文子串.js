//暴力法 时间复杂度高 pass
// var longestPalidrome=function (s) {
//     if(!s.length){
//         return ''
//     }
//     else if(s.length<=1){
//         return  s
//     }
//     var longest=s[0],str,i,j,len
//     var isPalindrom=function (left,right) {
//         while (left<right&&s[left]===s[right]){
//             console.log('left:',left,'right:',right)
//             left++
//             right--
//         }
//         console.log('isPalidrome',left>=right)
//         return left>=right
//     }
//     for(len=2;len<=s.length;len++){
//         for(i=0;i<s.length;i++){
//             j=i+len-1
//             if(isPalindrom(i,j)){
//                 str=s.slice(i,j+1)
//                 console.log(i,j,'str--',str)
//                 console.log('longest before---',longest)
//                 if(longest.length<str.length)longest=str
//                 console.log('longest after---',longest)
//             }
//         }
//     }
//     return  longest
//
// }

//轴心
var longestPalidrome=function (s) {
    if(!s) return ''
    else if(s.length<=1){
        return  s
    }
    var longest=s[0]
    var expandAroundCenter=function (left,right) {
        while (left>=0&&right<s.length&&s[left]===s[right]){
            left--
            right++
        }
        return s.slice(left+1,right)
    }
    for(var i=0;i<s.length;i++){
        var odd=expandAroundCenter(i,i)
        if(odd.length>longest.length)longest=odd
        var even=expandAroundCenter(i,i+1)
        if(longest.length<even.length)longest=even
    }
    return  longest
}
console.log(longestPalidrome('bb'))