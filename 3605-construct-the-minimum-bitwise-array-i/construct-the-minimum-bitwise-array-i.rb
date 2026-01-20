# @param {Integer[]} nums
# @return {Integer[]}
def min_bitwise_array(nums)
  nums.map do |n|
    if n == 2
      -1
    else
      # Find the first 0 bit starting from the right (LSB)
      # We skip the first bit (index 0) because it's always 1 for odd primes
      i = 1
      while (n >> i) & 1 == 1
        i += 1
      end
      
      # The minimum answer is n with the (i-1)-th bit flipped to 0
      n ^ (1 << (i - 1))
    end
  end
end