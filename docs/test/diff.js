function diff(oldTree,newTree) {
    let patches={}
    dfs(oldTree,newTree,0,patches)
    return patches
}
function dfs(oldNode,newNode,index,patches) {
    let curPatches=[]
    if(newNode){
        if(oldNode.tagName===newNode.tagName&&oldNode.key===newNode.key){
            let props=diffProps(oldNode.props,newNode.props)
            curPatches.push({type:'changeProps',props})
            diffChildrens(oldNode.children,newNode.children,index,patches)
        }else {
            curPatches.push({type:'replaceNode',node:newNode})
        }
    }
    if(curPatches.length){
        if(patches[index]){
            patches[index]=patches[index].concat(curPatches)
        }
        else {
            patches[index]=curPatches
        }
    }
}

function diffProps(oldProps,newProps) {
    let propsPatches=[]

}