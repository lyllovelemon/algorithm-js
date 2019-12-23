var lengthOfLongestSubstring = function(s) {
    let str='';
    let size=0;
    for(let i=0;i<s.length;i++){
        let char=s[i];
        let index=str.indexOf(s[i]);
        if(index===-1){
            str+=s[i];
            size=size<str.length?str.length:size
            console.log('str----',str,'str.length',str.length,'size',size,)
        }else{
            str=str.substr(index+1)+s[i]
            console.log('str',str)
        }
    }
    console.log('size',size)
    return size;

};
lengthOfLongestSubstring('abcabcbb')