# @param {Integer[]} nums
# @return {Integer}
def minimum_cost(nums)
    num1 = nums[0]
    nums.shift
    nums.sort!
    nums[0]+nums[1]+num1
end