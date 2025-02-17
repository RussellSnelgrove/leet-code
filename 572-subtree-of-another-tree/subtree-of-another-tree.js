/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var lookForSubTreeDFS = function (node, subRootNode) {
    if (!node && !subRootNode) return true;
    if (!node || !subRootNode || node.val !== subRootNode.val) return false;
    return (lookForSubTreeDFS(node.left, subRootNode.left) && lookForSubTreeDFS(node.right, subRootNode.right))
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;
    if (lookForSubTreeDFS(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};