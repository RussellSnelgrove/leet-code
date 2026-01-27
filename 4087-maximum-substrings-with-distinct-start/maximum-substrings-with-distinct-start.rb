# @param {String} s
# @return {Integer}
def max_distinct(s)
   s.split('').uniq.length
end