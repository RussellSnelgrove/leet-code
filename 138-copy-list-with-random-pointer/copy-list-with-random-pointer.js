/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    const copyMap = new Map();
    copyMap.set(null, null);

    let currentNode = head;
    while (currentNode !== null) {
        const copyNode = new _Node(currentNode.val);
        copyMap.set(currentNode, copyNode);
        currentNode = currentNode.next;
    }

    currentNode = head;
    while (currentNode !== null) {
        const copyNode = copyMap.get(currentNode);
        copyNode.next = copyMap.get(currentNode.next);
        copyNode.random = copyMap.get(currentNode.random);
        currentNode = currentNode.next;
    }
    return copyMap.get(head);
};