let Queue2=(function () {
    const items=new WeakMap()
    class Queue2{
        constructor() {
            items.set(this,[])
        }
        enqueue=function (element) {
            let q=items.get(this)
            q.push(element)
        }
        dequeue=function () {
            let q=items.get(this)
            let r=q.shift()
            return r
        }
        front=function () {
            let q=items.get(this)
            return q[0]
        }
        isEmpty=function () {
            let q=items.get(this)
            return q.length===0
        }
        size=function () {
            let q=items.get(this)
            return q.length
        }
        print=function () {
            let q=items.get(this)
            console.log(q.toString())
        }
    }
    return Queue2
})()

function PriorityQueue(){
    let items=[]
    function QueueElement(element,priority){
        this.element=element
        this.priority=priority
    }
    this.enqueue=function (element,priority) {
        let queueElement=new QueueElement(element,priority)
        let added=false
        for(let i=0;i<items.length;i++){
            if(queueElement.priority<items[i].priority){
                items.splice(i,0,queueElement)
                added=true
                break
            }
        }
        if(!added){
            items.push(queueElement)
        }
    }
    this.print=function () {
        for(let i=0;i<items.length;i++){
            console.log(`${items[i].element}-${items[i].priority}`)
        }
    }
}