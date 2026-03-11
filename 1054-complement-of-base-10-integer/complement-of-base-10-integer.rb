# @param {Integer} n
# @return {Integer}
def bitwise_complement(n)
    string = n.to_s(2)
    fliped = ''
    string.each_char do | char |
        fliped +='1' if char == '0'
        fliped +='0' if char == '1'
    end
    fliped.to_i(2)
end