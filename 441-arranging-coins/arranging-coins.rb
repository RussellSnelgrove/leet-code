# @param {Integer} n
# @return {Integer}
def arrange_coins(n)
    stairs_count = 0
    total_height = 0
    for i in 1..n do
        total_height += i
        break if total_height > n
        stairs_count += 1
    end
    stairs_count
end