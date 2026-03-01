# @param {String} n
# @return {Integer}
def min_partitions(n)
    n.to_i.digits.max
end