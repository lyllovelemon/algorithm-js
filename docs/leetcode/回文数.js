var isPalindrome = function(x) {
   let res=x.toString()
    return res===res.split('').reverse().join('')
};
console.log(isPalindrome(10))