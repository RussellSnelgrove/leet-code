# @param {Integer} n
# @return {Boolean}
def has_alternating_bits(n)
    bit_string = n.to_s(2)
    last_char = nil
    bit_string.each_char do |char|
        return false if last_char == char
        last_char = char
    end
    true
end