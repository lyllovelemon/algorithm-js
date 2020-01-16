var isMatch = function(s, p) {
  var reg=new RegExp('^'+p+'$')
    return reg.test(s)
};
console.log(isMatch("aa","a*"))