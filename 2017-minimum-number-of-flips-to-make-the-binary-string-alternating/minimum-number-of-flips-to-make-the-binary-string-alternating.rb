# @param {String} s
# @return {Integer}
def min_flips(s)
   n = s.bytesize
    ones = 0   
    i = 0
    while i < n
        ones += (i ^ s.getbyte(i)) & 1
        i += 1
    end
    zeros = n - ones        
    r = ones < zeros ? ones : zeros

    if (n & 1) == 1
        i = 0
        while i < n
            if (i & 1) ^ (s.getbyte(i) & 1) == 1
                ones -= 1; zeros += 1
            else
                ones += 1; zeros -= 1
            end
            cur = ones < zeros ? ones : zeros
            r = cur if cur < r
            i += 1
        end
    end
    r
end