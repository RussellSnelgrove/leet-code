/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var depthFirstSearch = function (node) {
    if (!node) {
        return [true, 0];
    }

    const leftNode = depthFirstSearch(node.left);
    const rightNode = depthFirstSearch(node.right);
    const balanced = leftNode[0] && rightNode[0] && Math.abs(leftNode[1] - rightNode[1]) <= 1;
    const height = 1 + Math.max(leftNode[1], rightNode[1]);

    return [balanced, height];
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    return depthFirstSearch(root)[0];
};