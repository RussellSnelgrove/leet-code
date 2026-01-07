# @param {String} s
# @return {Integer}
def length_of_last_word(s)
    s.split(' ').at(-1).length
end