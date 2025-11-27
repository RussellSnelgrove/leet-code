# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} val
# @return {ListNode}
def remove_elements(head, val)
    start = ListNode.new(0, head);
    last_node = start;
    current_node = head;

    while current_node != nil
        if current_node.val == val
            last_node.next = current_node.next 
        else
            last_node = current_node
        end
        current_node = current_node.next
    end
    return start.next
end