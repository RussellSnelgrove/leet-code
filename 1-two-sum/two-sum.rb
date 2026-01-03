# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    nums_hash = {}

    nums.each_with_index do |num, i|
        value = target-num
        return [nums_hash[value], i]  if(nums_hash[value])
        nums_hash[num] = i
    end
end