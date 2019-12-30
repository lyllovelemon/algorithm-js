const http=require('http')
listen(...args){
	debug('listen')
	const server=http.createServer(this.callback())
	return server.listen(...args)
}
callback(){
	const fn=compose(this.middleware)
	if(!this.listenrs('error').length)this.on('error',this.onerror)
	const handleRequest=(req,res)=>{
		const ctx=this.createContext(req,res)
		return this.handleRequest(ctx,fn)
	}
	return handleRequest
}