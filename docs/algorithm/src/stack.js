class Stack{
    constructor(){
        this.items=[]
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        return  this.items.pop()
    }
    peek() {
        return this.items[this.items.length-1]
    }
    isEmpty() {
        return this.items.length===0
    }
    size() {
        return this.items.length
    }
    clear() {
        this.items=[]
    }
    print() {
        console.log(this.items.toString())
    }
}

function divideByBase(decimal,base){
    let stack=new Stack(),rem=0,string='',digits='0123456789ABCDEF'
    while(decimal>0){
        rem=Math.floor(decimal%base)
        stack.push(rem)
        decimal=Math.floor(decimal/base)
    }
    while (!stack.isEmpty()){
        string+=digits[stack.pop()]
    }
    return string
}
console.log(divideByBase(10,16))