# 字典和散列表
```ecmascript 6
 /**
     * 字典存储的是[键,值]对(映射)
     *
     * **/
    function Dictionary() {
        let items={};
        this.has=function (key) {
            return key in items;
        }
        //从字典中添加新元素
        this.set=function (key,value) {
            items[key]=value;
        }
        this.remove=function (key) {
            if(this.has(key)){
                delete items[key];
                return true;
            }
            return false;
        }
        this.get=function (key) {
            return this.has(key)?items[key]:undefined
        }
        //将字典所包含的所有数值以数组形式返回
        this.values=function () {
            let values={};
            for(let k in items){
                if(this.has(k)){
                    values.push(items[k]);
                }
                return values;
            }
        }
        this.clear=function () {
            items={};
        }
        this.size=function () {
            let count=0;
            for(let prop in items){
                if(items.hasOwnProperty(prop)){
                    ++count;
                }
            }
            return count;
        }

        this.getItems=function () {
            return items;
        }
    }
    let dic=new Dictionary();
    dic.set('lemon','lemon.com');
    dic.set('lyl','lyl.com');
    dic.set('zh','zh.com');
    console.log(dic.has('lemon'));
    console.log(dic.size());
    // console.log(dic.values);
    console.log(dic.get('zh'));
    console.log(dic.getItems());
```

# 哈希map

## 作用 
尽可能快的在数据结构中找到一个值

### 散列函数
给定一个键值，返回值在表中的地址
```ecmascript 6
 function HashTable() {
        let table=[];
        /**
         * 散列函数
         * **/
        let loseloseHashCode=function (key) {
            let hash=0;
            for(let i=0;i<key.length;i++){
                hash+=key.charAt(i);//遍历key并将从ASCII表中查到每个字符对应ASCII值加到hash变量中
            }
            return hash % 37;//最后，返回hash值,为了得到比较小的数值，我们使用hash值和一个任意数做除法的余数
        }
        //从散列表中增加一个新项
        this.put=function (key,value) {
            let position=loseloseHashCode(key);
            console.log(position+'-'+key);
            table[position]=value;
        }
        this.remove=function (key) {
            table[loseloseHashCode(key)]=undefined;
        }
        this.get=function (key) {
          return table[loseloseHashCode(key)];
        }
    }
let hash=new HashTable();
    hash.put('lemon','lemon.com');
    hash.put('lyl','lyl.com');
    hash.put('zh','zh.com');
    console.log(hash)
```

