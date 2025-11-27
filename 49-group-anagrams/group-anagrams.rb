# @param {String[]} strs
# @return {String[][]}
def group_anagrams(strs)
    strs_hash = {}
    strs.each do |str|
        sorted_str = str&.chars&.sort()
        strs_hash[sorted_str] = [] if strs_hash[sorted_str] == nil
        strs_hash[sorted_str].push(str)
    end
    strs_array = strs_hash.values
    return strs_array
end