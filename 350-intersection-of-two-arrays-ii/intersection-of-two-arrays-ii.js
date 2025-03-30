/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const result = []
    while (nums1.length > 0 && nums2.length > 0) {
        if (nums1[0] === nums2[0]) {
            result.push(nums1.shift());
            nums2.shift();
        } else if (nums1[0] > nums2[0]) {
            nums2.shift();
        } else if (nums1[0] < nums2[0]) {
            nums1.shift();
        }
    }
    return result;
};