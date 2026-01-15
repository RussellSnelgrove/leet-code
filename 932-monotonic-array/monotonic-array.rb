# @param {Integer[]} nums
# @return {Boolean}
def is_monotonic(nums)
    increase = false
    decrease = false
    last_num = nums.shift
    nums.each do | num |
        increase = true if num > last_num
        decrease = true if num < last_num
        return false if increase && decrease
        last_num = num
    end
    true
end