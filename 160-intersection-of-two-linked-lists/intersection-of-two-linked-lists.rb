# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} headA
# @param {ListNode} headB
# @return {ListNode}
def getIntersectionNode(headA, headB)
    a_set = Set.new
    current_node = headA
    while current_node != nil
        a_set.add(current_node)
        current_node = current_node.next
    end
    current_node = headB
    while current_node != nil
        return current_node if a_set.include?(current_node)
        current_node = current_node.next
    end
    return nil
end