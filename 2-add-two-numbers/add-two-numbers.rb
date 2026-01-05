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
    # add to a new number
    # turn into numbers then add to new number
    
    head = ListNode.new
    current_node = head
    carry = 0;

    while l1 != nil || l2 != nil || carry != 0 
        val1 = l1 == nil ? 0 : l1.val
        val2 = l2 == nil ? 0 : l2.val

        current_node.next = ListNode.new((val1 + val2 + carry) % 10)
        current_node = current_node.next

        carry = (val1 + val2 + carry > 9) ? 1 : 0
        l1 = l1.next if l1 != nil
        l2 = l2.next if l2 != nil
    end
    
    head.next
    
    
    # number_1 = []
    # number_2 = []
    # while (l1&.val != nil)
    #     number_1.push(l1.val)
    #     l1 = l1.next
    # end
    # while (l2&.val != nil)
    #     number_2.push(l2.val)
    #     l2 = l2.next
    # end
    # number_1 = number_1.join('').reverse.to_i
    # number_2 = number_2.join('').reverse.to_i
    # result = (number_1 + number_2).to_s.split('').reverse
    # head = ListNode.new
    # current_node = head
    # result.each do | num |
    #     current_node.next = ListNode.new
    #     current_node = current_node.next
    #     current_node.val = num
    # end
    # head.next
end