# 集合
```ecmascript 6
 /**
     * 集合由一组无序且不重复项组成
     * **/
    function Set() {
        let items={};
        this.has=function (value) {
            return items.hasOwnProperty(value);
        }
        this.add=function (value) {
            if(!this.has(value)){
                items[value]=value;
                return true;
            }
            return false;
        }
        this.remove=function (value) {
            if(this.has(value)){
                delete items[value];
                return true;
            }
            return false;
        }
        this.clear=function () {
            items={};
        }
        this.size=function () {
            // return Object.keys(items).length; 只适合IE9以上浏览器
            let count=0;
            for(let prop in items){
                if(items.hasOwnProperty(prop)){
                    ++count;
                }
            }
            return count;
        }
        this.values=function () {
            return Object.keys(items);
        }
        //并集
        this.union=function (otherSet) {
            let unionSet=new Set();
            let values=this.values();
            for(let i=0;i<values.length;i++){
                unionSet.add(values[i]);
            }
            values=otherSet.values();
            for(let i=0;i<values.length;i++){
                unionSet.add(values[i]);
            }
            return unionSet;
        }

        //交集
        this.interSection=function (otherSet) {
            let interSectionSet=new Set();
            let values=this.values();
            for(let i=0;i<values.length;i++){
                if(otherSet.has(values[i])){
                    interSectionSet.add(values[i]);
                }
            }
            return interSectionSet;
        }

        //差集
        this.diffrence=function (otherSet) {
            let diffrenceSet=new Set();
            let values=this.values();
            for(let i=0;i<values.length;i++) {
                if(!otherSet.has(values[i])){
                    diffrenceSet.add(values[i])
                }
            }
            return diffrenceSet;
        }

        //子集
        this.subSet=function (otherSet) {
            if(this.size()>otherSet.size()){
                return false;
            }
            else{
                let values=this.values();
                for(let i=0;i<values.length;i++){
                    if(!otherSet.has(values[i])){
                        return false;
                    }
                }
            }
            return true;
        }
    }
let setA=new Set();
   setA.add(1);
   setA.add(2);


   let setB=new Set();
   setB.add(1)
   setB.add(2);
   setB.add(3);

   let setC=new Set();
   setC.add(2);
   setC.add(3);
   setC.add(4);
   console.log(setA.subSet(setB));
   console.log(setA.subSet(setC));
```

