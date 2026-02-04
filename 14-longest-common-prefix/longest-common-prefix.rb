# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    result = strs.shift
    strs.each do | str |
        length = [str.length, result.length].min
        
        for i in (0..length) do
            if str[i] != result[i]
                return '' if i == 0
                result = result[0..i-1]
                break
            end
        end
    end
    result
end