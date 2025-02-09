/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let startNode = new ListNode(null);
    startNode.next = head;
    let counter = 0;
    let nPointer = startNode;
    let traversalPointer = startNode;
    while (traversalPointer !== null) {
        if (n+1 === counter) {
            nPointer = nPointer.next;
        } else {
            counter++;
        }
        traversalPointer = traversalPointer.next;
    }
    nPointer.next = nPointer.next.next ?? null;
    return startNode.next;
};