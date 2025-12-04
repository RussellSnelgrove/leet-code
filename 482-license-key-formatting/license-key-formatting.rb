# @param {String} s
# @param {Integer} k
# @return {String}
def license_key_formatting(s, k)
    s_chars = s.delete('-').upcase().reverse().chars
    new_string = []
    temp_string = ''
    s_chars.each do | char|
        temp_string = char + temp_string
        if temp_string.length() == k
            new_string.prepend(temp_string)
            temp_string = ''
        end
    end
    new_string.prepend(temp_string) if temp_string.length() > 0
    new_string.join('-')
end