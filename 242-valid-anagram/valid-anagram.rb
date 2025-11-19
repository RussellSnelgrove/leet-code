# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    # option 1 is to sort both and compare 2log(n) * 2n
    # option 2 is to make a hash and compare the hashes 2n + 26
    return false if s.length != t.length
    sMap = Hash.new(0)
    tMap = Hash.new(0)
    s.each_char.with_index do |char, index|
        sMap[s[index]]+=1
        tMap[t[index]]+=1
    end
    sMap.each do |key, value|
        return false if tMap[key] != value
    end
    return true
end