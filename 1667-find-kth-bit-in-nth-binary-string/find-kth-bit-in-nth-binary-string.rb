# @param {Integer} n
# @param {Integer} k
# @return {Character}
def find_kth_bit(n, k)
    st = '0'
    temp = ''
    (0...n).each do |i|
    temp = st.dup
    st += '1'
    if i > 1
      temp_n = temp.length
      adj = (temp.to_i(2) ^ ('1' * temp_n).to_i(2)).to_s(2)
      adj_n = adj.length
      if adj_n < temp_n
        diff = temp_n - adj_n
        diff.times { adj += '0' }
      end
      st += adj.reverse
    end
  end
  st[k-1]
end