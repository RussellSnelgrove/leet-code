# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    left_pointer = 0
    right_pointer = nums.length - 1
    while left_pointer <= right_pointer
        mid_pointer = (right_pointer + left_pointer)/2
        return mid_pointer if nums[mid_pointer] == target
        left_pointer = mid_pointer+1 if nums[mid_pointer] < target
        right_pointer = mid_pointer-1 if nums[mid_pointer] > target
    end
    -1
end