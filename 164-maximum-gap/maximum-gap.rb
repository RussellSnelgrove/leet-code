# @param {Integer[]} nums
# @return {Integer}
def maximum_gap(nums)
    # O(n log n)
    nums.sort!
    maxGap = 0;
    lastElement = nil
    nums.each do | num |
        lastElement = num if lastElement.nil?
        gap = num - lastElement
        maxGap = gap if gap > maxGap 
        lastElement = num
    end
    maxGap
end