/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var depthBranch = function (node) {
    if (node === null) return 0;
    const leftBranchHeight = depthBranch(node.left);
    const rightBranchHeight = depthBranch(node.right);
    return Math.max(leftBranchHeight, rightBranchHeight) + 1;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    return depthBranch(root)
};