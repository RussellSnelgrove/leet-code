# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
    # nums.delete(val)
    # return nums.length()

    index = 0;
    index_count = 0;
    nums_length = nums.length()
    while index_count < nums_length
        if nums[index] == val
            nums.delete_at(index)
            index_count += 1
        else
            index += 1
            index_count +=1

        end
    end
    return nums.length()
end