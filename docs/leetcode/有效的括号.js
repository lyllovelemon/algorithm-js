var isValid = function(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if(s[i] ==="("){
            arr.push(")");
        }else if(s[i] === "{"){
            arr.push("}");
        }else if(s[i] === "["){
            arr.push("]");
        }else if(arr.pop() !== s[i] ){
            return false;
        }
    }
    return !arr.length;
};
console.log(isValid(""))