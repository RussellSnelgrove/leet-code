/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    const queue1 = [q];
    const queue2 = [p];

    while (queue1.length>0 || queue2.length>0) {
        let queue1Len = queue1.length;
        for (let i = 0; i < queue1Len; i++) {
            const node1 = queue1.shift();
            const node2 = queue2.shift();
            if (node1 === null && node2 === null) continue;
            if (node1 === null || node2 === null || node1.val !== node2.val) return false;
            queue1.push(node1.left);
            queue1.push(node1.right);
            queue2.push(node2.left);
            queue2.push(node2.right);
        }
    }
    return true;
};