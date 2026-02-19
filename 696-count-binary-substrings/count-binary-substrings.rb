# @param {String} s
# @return {Integer}
def count_binary_substrings(s)
    zero_count = 0
    one_count = 0
    result = 0
    current_block = nil
    blocks = []
    s.each_char do | char |
        if char == current_block
            current_block == '1' ? one_count += 1 : zero_count += 1
        else
            result += [one_count,zero_count].min
            char == '1' ? one_count = 1 : zero_count = 1
            current_block = char
        end
    end
    result += [one_count,zero_count].min
    result
end