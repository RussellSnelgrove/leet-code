# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def top_k_frequent(nums, k)
    nums_hash = {}
    nums.each do |num|
        nums_hash[num] = 0 if nums_hash[num] == nil
        nums_hash[num] +=1
    end
    nums_array = nums_hash.sort_by{|key, value| value}.to_h.keys.last(k)
    return nums_array
end