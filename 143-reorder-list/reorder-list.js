/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slowPointer = head;
    let fastPointer = head?.next;
    while(fastPointer !== null && fastPointer.next !== null){
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    };
    let currentNode = slowPointer?.next;
    let lastNode = (slowPointer.next = null);
    while(currentNode !== null){
        let nextNode = currentNode?.next;
        currentNode.next = lastNode;
        lastNode = currentNode;
        currentNode = nextNode;
    }
    // slowPointer should Now be at the beginning of the end of the list
    let leftPointer = head;
    let rightPointer = lastNode;
    while (rightPointer !== null){
        let leftNext = leftPointer.next;
        let rightNext = rightPointer.next;
        leftPointer.next = rightPointer;
        rightPointer.next = leftNext;
        leftPointer = leftNext;
        rightPointer = rightNext;
    }
};