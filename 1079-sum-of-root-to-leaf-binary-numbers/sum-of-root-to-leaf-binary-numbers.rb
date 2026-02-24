# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Integer}
def sum_root_to_leaf(root)
  queue = [[root, '']]
  sum = 0
  until queue.empty?
    node,s = queue.pop
    s = "#{s}#{node.val}"
    sum += s.to_i(2) if node.right.nil? && node.left.nil?
    queue << [node.left, s] unless node.left.nil?
    queue << [node.right, s] unless node.right.nil?
  end
  
  sum
end