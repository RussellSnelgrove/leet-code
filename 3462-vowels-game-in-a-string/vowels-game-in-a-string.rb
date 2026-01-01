# @param {String} s
# @return {Boolean}
def does_alice_win(s)
    count = s.downcase.count('aeiou')
    return false if count == 0
    true
end