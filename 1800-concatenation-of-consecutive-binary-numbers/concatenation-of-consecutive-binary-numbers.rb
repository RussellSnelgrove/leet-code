# @param {Integer} n
# @return {Integer}
def concatenated_binary(n)
  result = 0
  p = 1
  mod = 10**9 + 7
  
  (1..n).each do |i|
    p <<= i == p ? 1 : 0
    result = ((result*p) + i)%mod
  end
  
  result
end

# def concatenated_binary(n)
#     binary_string = ''
#     for i in (1..n) do
#         binary_string = binary_string + i.to_s(2)
#     end
#     binary_string.to_i(2) % ((10**9) +7)
# end