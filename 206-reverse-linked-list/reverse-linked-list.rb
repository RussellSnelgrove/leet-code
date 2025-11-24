# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
    last_node = nil
    current_node = head
    next_node = head&.next
    while current_node != nil
        current_node.next = last_node
        last_node = current_node
        current_node = next_node
        next_node = next_node&.next
    end
    return last_node
end