# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
    puts nums.delete(val)
    return nums.length()
end