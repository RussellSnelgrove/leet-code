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
var minDepth = function (root) {
    // using BFS
    const queue = [];
    if (root !== null) queue.push(root);
    let height = 0;
    while (queue.length > 0) {
        const levelNodes = queue.length;
        for (let i = 0; i < levelNodes; i++) {
            const node = queue.shift();
            if (node.left === null && node.right === null) return height + 1;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        height++;
    }
    return height;
};