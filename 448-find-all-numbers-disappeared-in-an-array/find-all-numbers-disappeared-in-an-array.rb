# @param {Integer[]} nums
# @return {Integer[]}
def find_disappeared_numbers(nums)
    nums_length = nums.length
    nums_set = nums.to_set
    missing_nums = []
    for i in 1..nums_length do
        next if nums_set.include?(i)
        missing_nums.push(i)
    end
    return missing_nums
end