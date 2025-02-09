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
var reverseList = function(head) {
    let lastNode = null;
    let currentNode = head;
    while (currentNode !== null){
        let next = currentNode.next;
        currentNode.next = lastNode;
        lastNode = currentNode;
        currentNode = next;
    }
    return lastNode;
};