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
 * @return {boolean}
 */
var validateLeftNode = function (node, lowerLimit, upperLimit) {
    if (node === null) return true;
    const left = validateLeftNode(node.left, lowerLimit, node.val);
    const right = validateRightNode(node.right, node.val, upperLimit)
    return (lowerLimit < node.val && node.val < upperLimit) && left && right;
}
var validateRightNode = function (node, lowerLimit, upperLimit) {
    if (node === null) return true;
    const left = validateLeftNode(node.left, lowerLimit, node.val);
    const right = validateRightNode(node.right, node.val, upperLimit)
    return (lowerLimit < node.val && node.val < upperLimit) && left && right;
}
var isValidBST = function (root) {
    const left = validateLeftNode(root.left, -Infinity, root.val);
    const right = validateRightNode(root.right, root.val, Infinity);
    return left && right;
};