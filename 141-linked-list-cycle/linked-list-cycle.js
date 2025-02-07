/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let pointer1 = head;
    let pointer2 = head;
    while (pointer2 !== null && pointer2.next !== null){
        pointer1 = pointer1.next;
        pointer2 = pointer2.next.next;
        if (pointer2 === pointer1) return true;
    }
    return false;
};