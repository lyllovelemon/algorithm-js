function myInstanceof(left,right) {
    let prototype=right.prototype
    left=left._proto_
    while (true){
        if(left===null){
            return false
        }
        if(prototype===left){
            return true
        }
        left=left._proto_
    }
}
