# @param {Integer} column_number
# @return {String}
def convert_to_title(column_number)
    column_string = ''
    while column_number > 0
        column_string +=  (65 + ((column_number - 1) % 26)).chr
        column_number = (column_number-1) / 26
    end
    column_string.reverse!
end