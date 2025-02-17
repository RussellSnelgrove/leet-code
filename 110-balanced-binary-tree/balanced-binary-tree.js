/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var dfs = function (node) {
    if (node === null) return [true, 0];
    let rightNode = dfs(node.right);
    let leftNode = dfs(node.left)
    return [rightNode[0] && leftNode[0] && Math.abs(leftNode[1] - rightNode[1]) <= 1, Math.max(rightNode[1], leftNode[1])+1];
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    return dfs(root)[0];
};