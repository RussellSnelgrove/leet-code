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
 * @return {TreeNode}
 */
var invertTree = function (node) {
    if (node === null || (node.right === null && node.left === null)) return node;
    if (node.right !== null) invertTree(node.right);
    if (node.left !== null) invertTree(node.left);
    let temp = node.right;
    node.right = node.left;
    node.left = temp;
    return node;};