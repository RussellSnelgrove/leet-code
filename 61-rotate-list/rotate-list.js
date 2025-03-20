/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head === null || head.next === null) return head
    // this is a two pointer problem
    let pointer1 = head;
    let pointer2 = head;
    let nodesTraversed = 0;
    while(nodesTraversed !== k){
       pointer2 = (pointer2.next === null) ? head : pointer2.next;
        nodesTraversed++;
    }
    while(pointer2.next !== null) {
        pointer2 = pointer2.next;
        pointer1 = pointer1.next;
    }
    pointer2.next = head;
    const newHead = pointer1.next;
    pointer1.next = null;
    console.log(pointer1)
    console.log(pointer2)
    return newHead;
    
};