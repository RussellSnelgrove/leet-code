# @param {String} s
# @return {Boolean}
def check_ones_segment(s)
        hitOne = false
    afterOneZero = false
    s.split('').each_with_index do |num,i|
        if num.to_i == 1
            if hitOne == false
                hitOne = true
            end
            if afterOneZero == true
                return false
            end

        else
            if hitOne == true
                afterOneZero = true
            end
        end
    end
    return true

end