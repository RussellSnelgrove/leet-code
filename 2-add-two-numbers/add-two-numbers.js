/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const startNode = new ListNode(null);
    let currentNode = startNode;
    let carry = 0;
    while (l1 || l2 || carry) {
        const val1 = l1?.val ?? 0;
        const val2 = l2?.val ?? 0;
        const newNodeValue = val1 + val2 + carry;

        carry = parseInt((newNodeValue) / 10);
        currentNode.next = new ListNode(newNodeValue % 10);

        l1 = l1?.next;
        l2 = l2?.next;
        currentNode = currentNode.next;
    }
    return startNode.next;
};