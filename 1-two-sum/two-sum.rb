# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    nums_hash = {}

    nums.each_with_index do |num, index|
        value = target-num
        return [nums_hash[value], index]  if(nums_hash[value])
        nums_hash[num] = index
    end
end