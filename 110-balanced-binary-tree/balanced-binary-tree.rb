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
# @return {Boolean}
def is_balanced(root)
    return true if root.nil?
    check_height(root) != -1
end


def check_height(node)
  return 0 if node.nil?

  left_height = check_height(node.left)
  return -1 if left_height == -1

  # Recursively check right subtree
  right_height = check_height(node.right)
  return -1 if right_height == -1

  # If current node is unbalanced, return -1
  if (left_height - right_height).abs > 1
    return -1
  end

  # Return actual height if balanced
  [left_height, right_height].max + 1
end