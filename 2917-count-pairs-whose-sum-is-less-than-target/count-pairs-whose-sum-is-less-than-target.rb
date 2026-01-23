# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def count_pairs(nums, target)
    count = 0
    for index_i in (0..nums.length-2) do
        for index_j in (index_i+1..nums.length-1) do
            count += 1 if nums[index_i] + nums[index_j] < target
        end
    end
    count
end