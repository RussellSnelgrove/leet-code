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
def merge_nodes(head)
    current_node = head
    last_node = head
    while current_node.next != nil
        current_node.val += current_node.next.val
        current_node.next = current_node.next.next
     if current_node.next.val == 0
        last_node = current_node
        current_node = current_node.next
     end
    end
    last_node.next = nil
    head
end