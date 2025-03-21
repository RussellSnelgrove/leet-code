/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    function dfs(node, sum){
        if(node === null) return false;
        sum += node.val;
        if(node.left === null && node.right === null) return sum === targetSum;
        return (dfs(node.left, sum) || dfs(node.right, sum));
    }

    return dfs(root, 0);


};