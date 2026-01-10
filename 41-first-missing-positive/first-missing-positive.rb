# @param {Integer[]} nums
# @return {Integer}
def first_missing_positive(nums)
    num_hash = nums.to_set
    for i in (1..nums.length+1) do 
        return i if num_hash.include?(i) == false
    end
end