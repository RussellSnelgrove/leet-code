# @param {Integer[]} pref
# @return {Integer[]}
def find_array(pref)
      [0, *pref].each_cons(2).map { _1 ^ _2 }
end