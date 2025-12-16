# @param {Integer} num
# @return {Integer}
def maximum69_number (num)
    num_array = num.to_s.split('')
    return num if !num_array.include?('6')    
    num_array.each_with_index do | individual_num, index|
        if individual_num == '6'
            num_array[index] = '9'
            break
        end
    end
    num = num_array.join('').to_i
    return num
end