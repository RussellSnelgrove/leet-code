# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
    nums1.concat(nums2)
    nums1.sort!
    return nums1[nums1.size/2] if nums1.size % 2 == 1
    value = (nums1[(nums1.size/2).ceil] + nums1[(nums1.size/2).floor - 1])
    value.to_f / 2
end