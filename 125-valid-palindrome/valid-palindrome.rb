# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    sString = s.gsub(/[^0-9A-Za-z]/, '').downcase;
    return sString === sString.reverse;
end