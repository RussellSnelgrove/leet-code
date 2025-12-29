# @param {Integer} n
# @return {Integer}
def trailing_zeroes(n)
  k = Math.log(n, 5)
  count = 0
  (1..k).each do |i|
    count += n / (5**i)
  end
  count
end