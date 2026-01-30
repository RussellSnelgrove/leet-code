# @param {String} s
# @return {Integer}
def length_of_last_word(s)
    count = 0
    last_var_a_char = false
    s.reverse.each_char do |char |
        return count if char == ' ' && last_var_a_char
        last_var_a_char = true if char != ' '
        count += 1 if last_var_a_char
    end
    count
end