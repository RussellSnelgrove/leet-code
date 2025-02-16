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
 * @return {number}
 */
var maxDepth = function (root) {
    const stack = [[root, 1]];
    let res = 0;
    while (stack.length > 0) {
        const currentNode = stack.pop();
        const node = currentNode[0];
        const hieght = currentNode[1];
        if (node !== null) {
            res = Math.max(res, hieght);
            stack.push([node.right, hieght + 1]);
            stack.push([node.left, hieght + 1]);
        }
    }
    return res
};