# @param {String} s
# @return {Integer}
def first_uniq_char(s)
    uniq_hash = {}
    dup_hash = {}
    s.chars.each_with_index do | s_char, index |
        if dup_hash[s_char] == nil
            if uniq_hash[s_char] == nil
                uniq_hash[s_char] = index
            else 
                dup_hash[s_char] = true
                uniq_hash.delete(s_char)
            end
        end
    end
    return -1 if uniq_hash.empty?
    return uniq_hash.values.first
end