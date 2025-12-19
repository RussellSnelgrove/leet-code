# @param {Integer} column_number
# @return {String}
def convert_to_title(column_number)
    # find how many times the number divides into 26 thats the first column then so on
    length_of_string = 0;
    column_string = ''
    while column_number > 0
        # column_string.prepend()
        # value = (column_number / 26).floor()
        column_string +=  (65 + ((column_number - 1) % 26)).chr
        column_number = (column_number-1) / 26
    end
    column_string.reverse!
    # return !
end