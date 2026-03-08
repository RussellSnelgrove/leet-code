# @param {String[]} nums
# @return {String}
def find_different_binary_string(nums)
    n = nums.length
    result = ""
    # Build string by taking opposite of each diagonal bit
    n.times do |i|
        # Take opposite of ith bit from ith string
        result += nums[i][i] == '0' ? '1' : '0'
    end
    result

end