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
# @return {TreeNode}
def bst_to_gst(root)
    @total = 0
    dfs(root)
    root
    
end

def dfs(node) 
    if node.right
        dfs(node.right)
    end

    @total += node.val
    node.val = @total

    if node.left
        dfs(node.left)
    end
end
