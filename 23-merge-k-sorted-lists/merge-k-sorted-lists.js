/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// tests: [[1,4,5],[1,3,4],[2,6]]
// 
    const merge2Lists = (list1, list2) => {
        if (list1 === null) return list2
        if (list2 === null) return list1
        if(list1.val>=list2.val){
            list2.next = merge2Lists(list1,list2.next);
            return list2;
        } else {
            list1.next = merge2Lists(list1.next,list2);
            return list1;
        }
    }

    
var mergeKLists = function(lists) {
    // lists = lists.filter((l)=>{return l != null})
    if (lists.length === 0) return null;
    while(lists.length>1){
        lists.push(merge2Lists(lists[0], lists[1]));
        lists.splice(0,2);
    }
    return lists[0];

    // for(i=0;)
};