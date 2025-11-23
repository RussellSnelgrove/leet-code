# @param {Integer[]} numbers
# @param {Integer} target
# @return {Integer[]}
def two_sum(numbers, target)
    left_pointer_index = 0;
    right_pointer_index = numbers.length()-1;
    while left_pointer_index < right_pointer_index
        if numbers[left_pointer_index] + numbers[right_pointer_index] > target
            right_pointer_index -= 1
        elsif numbers[left_pointer_index] + numbers[right_pointer_index] < target
            left_pointer_index += 1
        else
            return [left_pointer_index+1, right_pointer_index+1]   
        end
    end
end