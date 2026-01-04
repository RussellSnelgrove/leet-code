# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
    # 2 options
    # reverse list then add to a new number
    # turn into numbers then add to new number
    number_1 = []
    number_2 = []
    while (l1&.val != nil)
        number_1.push(l1.val)
        l1 = l1.next
    end
    while (l2&.val != nil)
        number_2.push(l2.val)
        l2 = l2.next
    end
    number_1 = number_1.join('').reverse.to_i
    number_2 = number_2.join('').reverse.to_i
    result = (number_1 + number_2).to_s.split('').reverse
    head = ListNode.new
    current_node = head
    result.each do | num |
        current_node.next = ListNode.new
        current_node = current_node.next
        current_node.val = num
    end
    head.next
end