# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def minimum_difference(nums, k)
    nums.sort!
    return 0 if nums.length == 1
    min_gap = nil
    for i in k-1..nums.length - 1 do
        gap = nums[i] - nums[i-k+1]
        puts gap
        min_gap = gap if min_gap.nil? || gap < min_gap
        puts min_gap
    end
    min_gap
end