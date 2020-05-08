/**
 *给定一个二叉树，返回它的中序 遍历。
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 function TreeNode(val) {
    this.val = val
    this.left = this.right = null
 }
var inorderTraversal = function(root) {
  if(root){
      return [...inorderTraversal(root.left),root.val,...inorderTraversal(root.right)]
  }
  else {
      return []
  }
};
// var inorderTraversal = function(root) {
//    const printArr=[]
//    if(!root){return printArr}
//    const stack=[]
//    stack.push({
//        color:'white',
//        node:root
//    })
//    while (stack.length){
//        const pickValue=stack.pop()
//        const {color,node}=pickValue
//        if(color==='gray'){
//            printArr.push(node.val)
//        }
//        else {
//            node.right&&stack.push({color:'white',node:node.right})
//            stack.push({color:"gray",node})
//            node.left&&stack.push({color:'white',node:node.left})
//        }
//    }
//    return printArr
// };
