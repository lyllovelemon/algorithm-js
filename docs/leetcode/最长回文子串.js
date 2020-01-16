/**
 * 最长回文子串
 * **/
var longestPalindrome = function(s) {
    let size=0,str='',repeatStr='';
    for(let i=0;i<s.length;i++){
        let char=s[i];
        let index=str.indexOf(s[i])
        if(index===-1){
            str+=s[i];
            size=size<str.length?str.length:size;
            console.log('str',str)
        }
        else {
            repeatStr=str.substr(index)+s[i]
            console.log('repeatStr',repeatStr)
        }
    }
    return str
};
longestPalindrome("qbabad")