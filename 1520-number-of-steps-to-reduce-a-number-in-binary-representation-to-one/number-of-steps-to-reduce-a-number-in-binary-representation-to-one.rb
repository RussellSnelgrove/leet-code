# @param {String} s
# @return {Integer}
def num_steps(s)
    count = 0
    number = s.to_i(2)
    while number != 1 do
        number = (number % 2 == 0) ? number/2 : number+1 
        count += 1
    end
    count
end