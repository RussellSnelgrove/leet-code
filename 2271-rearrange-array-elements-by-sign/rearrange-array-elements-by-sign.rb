# @param {Integer[]} nums
# @return {Integer[]}
def rearrange_array(nums)
   final_array = Array.new(nums.length)
    even_index = 0
    odd_index = 1
    nums.each do |num|
        if num < 0
            final_array[odd_index] = num
            odd_index += 2
        else
            final_array[even_index] = num
            even_index += 2
        end
    end
   final_array 
end