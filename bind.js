//递归遍历DOM
// function getElementById(node,id) {
//     if(!node){
//         return null;
//     }
//     if(node.id===id){
//         return node;
//     }
//     for(let i=0;i<node.childNodes.length;i++){
//         let finded=getElementById(node.childNodes[i],id);
//         if(finded){ return finded};
//     }
// }
// getElementById(document,'c');

//非递归遍历
function getElementById(node,id) {
    while (node){
        if(node.id===id) return node;
        node=nextElement(node)
    }
    return null;
}
function nextElement(node) {
    if(node.children.length){
        return node.childNodes[0];
    }
    if(node.nextElementSibling){
        return node.nextElementSibling;
    }
    while (node.parentNode){
        if(node.parentNode.nextElementSibling){
            return node.parentNode.nextElementSibling;
        }
        node=node.parentNode;
    }
    return null
}
