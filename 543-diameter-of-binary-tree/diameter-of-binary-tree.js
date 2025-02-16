/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var dfs = function (root, diameter) {
    if (root === null) return 0;
    let leftHeight = 0;
    let rightHeight = 0;
    if (root.right) rightHeight = dfs(root.right, diameter);
    if (root.left) leftHeight = dfs(root.left, diameter);
    diameter[0] = Math.max(diameter[0], rightHeight + leftHeight);
    return 1 + Math.max(rightHeight, leftHeight);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    const diameter = [0]
    dfs(root, diameter);
    return diameter[0];
};