# @param {Integer} area
# @return {Integer[]}
def construct_rectangle(area)
    l = area
    w = 1
    distance = l - w
    for i in 2..Math.sqrt(area).to_i do
        if (area % i == 0) 
            temp_w = area/i
            if (temp_w - i).abs < distance
                l = [i, temp_w].max
                w = [i, temp_w].min
                distance = l - w
            end
        end
    end
    return [l, w]
end