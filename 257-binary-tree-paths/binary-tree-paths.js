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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const result = [];
    if (root === null) return result;
    function findPath(node, path) {
        path = (path === '') ? path + node.val : path + '->' + node.val;
        if (node.left === null && node.right === null) return result.push(path);
        if (node.left) findPath(node.left, path);
        if (node.right) findPath(node.right, path);
    }
    findPath(root, '');
    return result;
};