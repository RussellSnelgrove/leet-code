# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
    nums_len = nums.length()
    index = 0
    while nums_len > 0
        if nums[index] == 0 
            nums.delete_at(index)
            nums.push(0)
        else
            index += 1
        end
        nums_len -= 1
    end
    return nums
end