# @param {Integer[]} arr
# @return {Integer[]}
def replace_elements(arr)
    current_max = -1
    arr.reverse!
    result = []
    arr.each do |element|
        result.unshift(current_max)
        current_max = element if element > current_max
    end
    result
end