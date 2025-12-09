# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {Boolean}
def is_palindrome(head)
    curr_node = head
    node_array = []
    while !curr_node.nil?
        node_array.push(curr_node.val)
        curr_node = curr_node.next
    end

    reverse_node_array = node_array.reverse
    return reverse_node_array == node_array
end