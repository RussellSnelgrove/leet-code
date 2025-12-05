# @param {Integer} x
# @param {Integer} y
# @param {Integer} z
# @return {Integer}
def find_closest(x, y, z)
    xz_disctance = (z-x).abs
    yz_disctance = (z-y).abs
    return 0 if (yz_disctance == xz_disctance)
    return 1 if (yz_disctance > xz_disctance)
    return 2
end