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
var deleteDuplicates = function (head) {
    if (head === null || head.next === null) return head;
    let backTrackPointer;
    let pointer1 = head;
    let pointer2 = head.next;
    let newHead = null;
    while (pointer2 !== null) {
        if (pointer1.val === pointer2.val) {
            while (pointer2 && pointer1.val === pointer2.val) pointer2 = pointer2.next;
            if (backTrackPointer !== undefined) {
                backTrackPointer.next = pointer2;
            }
            if (pointer2 === null) {
                if (backTrackPointer !== undefined) {
                    backTrackPointer.next = pointer2;
                }
                break;
            }
            pointer1 = pointer2;
            pointer2 = pointer2.next;
            if (pointer2 === null) {
                if (newHead === null) newHead = pointer1;
            }

        } else {
            if (newHead === null) newHead = pointer1;
            backTrackPointer = pointer1;
            pointer1 = pointer2;
            pointer2 = pointer2.next;
        }
    }
    return newHead;
};