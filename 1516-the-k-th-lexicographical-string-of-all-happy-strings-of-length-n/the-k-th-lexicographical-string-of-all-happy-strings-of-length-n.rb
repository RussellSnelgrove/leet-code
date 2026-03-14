# @param {Integer} n
# @param {Integer} k
# @return {String}
def get_happy_string(n, k)
      sz = 3 * (1 << (n - 1))
  return "" if k > sz

  base = 1 << (n - 1)
  q = (k - 1) / base
  r = (k - 1) % base

  s = Array.new(n)
  s[0] = ('a'.ord + q).chr

  xx = [
    ['b', 'c'],
    ['a', 'c'],
    ['a', 'b']
  ]

  (n - 2).downto(0) do |i|
    idx = s[n - 2 - i].ord - 'a'.ord
    bit = (r >> i) & 1
    s[n - 1 - i] = xx[idx][bit]
  end

  s.join
end