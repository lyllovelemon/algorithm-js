class EventEmitter {
	constructor(){
		if(this._events===undefined){
			this._events=Object.create(null)
			this._eventsCount=0
		}
		this.handler={}
	}
	on(eventName,callback){
		if(!this.handler){
			this.handler={}
		}
		if(!this.handler[eventName]){
			this.handler[eventName]=[]
		}
		this.handler[eventName].push(callback)
	}
	emit(type,...args){
		const events=this._events
		const handler=events[type]
		if(typeof handler==='function'){
			Reflect.apply(handler,this,args)
		}
		else {
			const len=handler.length
			for(var i=0;i<len;i++){
				Reflect.apply(handler[i],this,args)
			}
		}
		return true
	}
	
}
let event=new EventEmitter()
event.on('say',function (str) {
	console.log(str)
})
event.emit('say','Hello,lemon')