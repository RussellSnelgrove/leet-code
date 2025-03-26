/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);
    const result = [];
    nums1Set.forEach((value, key) => {
        if (nums2Set.has(value)) {
            result.push(value);
            // nums2Set.delete(val);
        }
        // nums1Set.delete(val);
    })
    return result;
};