# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def min_removal(nums, k)
    max_gap = 1
    pointer_1 = 0
    pointer_2 = 0
    nums.sort!
    while pointer_2 < nums.length
        if nums[pointer_2] > (nums[pointer_1] * k)
            pointer_1 += 1
            next
        end

        gap = pointer_2 - pointer_1 +1
        max_gap = gap if gap > max_gap
        pointer_2+=1
    end
    nums.length - max_gap 
end