/**
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 * **/
function TreeNode(val) {
    this.val=val
    this.left=this.right=null
}
var diameterOfBinaryTree = function(root) {
   let ans=1
    function depth(rootNode) {
        if(!rootNode){
            return 0
        }
        let L=depth(rootNode.left)//递归获取左子树深度
        let R=depth(rootNode.right)//递归获取右子树深度
        /**
         * 左子树深度+右子树深度+1(根节点)=二叉树最小值节点到最大值节点的最长路径
         * **/
        ans=Math.max(ans,L+R+1)
        /** 关键点2
       已知根节点的左右子树的深度，
       则，左右子树深度的最大值 + 1，
       便是以根节点为数的最大深度**/
        return Math.max(L,R)+1
    }
    depth(root)
    return ans-1;

};

