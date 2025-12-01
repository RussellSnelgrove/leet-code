# @param {Integer[]} nums
# @return {Integer}
def third_max(nums)
    sorted_nums = nums.sort().uniq()
    return sorted_nums[-3] || sorted_nums[-1]
    # first_max = nil
    # second_max = nil
    # third_max = nil

    # nums.each do |num|
    #     if first_max && first_max < num
    #         second_max = first_max
    #         third_max = second_max
    #     else
    #         first_max = num if first_max.nil?
    #     end
    # end
    # return third_max || second_max || first_max
end