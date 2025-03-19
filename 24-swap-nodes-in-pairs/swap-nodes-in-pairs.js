/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let counter = 0;
    if(head === null || head.next === null) return head
    let node1 = head;
    let node2 = head.next;
    let lastPairLastNode;
    const newHead = head.next;
    while(node1 !== null && node1?.next !== null && node2 !== null){
        node1.next = node2.next;
        node2.next = node1;
        if (lastPairLastNode) lastPairLastNode.next = node2
        lastPairLastNode = node1;
        node1 = node1.next;
        node2 = node1?.next;
    }
    return newHead;
};