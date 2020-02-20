var letterCombinations = function(digits) {
 let map=['',1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
 let digitArr=digits.split('')
    if(!digits){
        return []
    }
    let code=[];
 for(let i=0;i<digitArr.length;i++){
     if(map[digitArr[i]]){
         code.push(map[digitArr[i]])
     }
 }
 console.log('code--->',code)
 if(code.length<2){
     if(!code[0]){
         return code[0]
     }
     else {
         return code[0].split('')
     }

 }
 let trace=(arr)=>{
     let res=[]
     for(let i=0;i<arr[0].length;i++){
         for(let j=0;j<arr[1].length;j++){
             res.push(`${arr[0][i]}${arr[1][j]}`)
         }
     }
     arr.splice(0,2,res)
     if(arr.length>1){
         trace(arr)
     }
     return arr[0]
 }
 return trace(code)
};
console.log(letterCombinations(""))