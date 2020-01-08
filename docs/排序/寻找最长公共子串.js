function maxSubString(str1,str2) {
	if(!str1||!str2)return''
	var len1=str1.length,len2=str2.length
	var maxSubStr=''
	for(var i=0;i<len1;i++){
		for(var j=0;j<len2;j++){
			var tempStr='',k=0;
			while ((i+k<len1)&&(j+k<len2)&&(str1[i+k]===str2[j+k])){
				tempStr+=str1[i+k]
				k++
			}
			if(tempStr.length>maxSubStr.length){
				maxSubStr=tempStr
			}
		}
	}
	return maxSubStr
}