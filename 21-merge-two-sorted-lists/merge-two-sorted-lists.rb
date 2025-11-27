# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
    head = ListNode.new();
    current_node = head
    while(list1 != nil && list2 != nil)
        if (list1.val > list2.val)
            current_node.next = list2
            current_node = current_node.next
            list2 = list2.next;
        else
            current_node.next = list1
            current_node = current_node.next
            list1 = list1.next;
        end
    end
    if(list1 == nil)
        current_node.next = list2
    else
        current_node.next = list1
    end
    return head.next
end