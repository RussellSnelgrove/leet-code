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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    // solve using DFS
    const result = [];
    if(root === null) return[];
    function dfs(node, sum, values) {
        if (node.left === null && node.right === null) {
            if (node.val + sum === targetSum) {
                result.push([...values, node.val]);
            }
        }
        if (node?.left) dfs(node.left, sum + node.val, [...values, node.val]);
        if (node?.right) dfs(node.right, sum + node.val, [...values, node.val]);
    }
    dfs(root, 0, []);
    return result;
};