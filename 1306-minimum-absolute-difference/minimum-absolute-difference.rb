# @param {Integer[]} arr
# @return {Integer[][]}
def minimum_abs_difference(arr)
    arr.sort!
    current_gap = nil
    last_num = nil
    result = []
    last_num = arr.shift
    arr.each do | num |
        if current_gap.nil? || num - last_num < current_gap
            current_gap = num-last_num
            result = []
            result.push([last_num, num])
        elsif num - last_num == current_gap
            result.push([last_num, num])
        end
        last_num = num
    end
    result
end