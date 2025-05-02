/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const newArray = nums1.concat(nums2).sort((a, b) => a - b);
    if (newArray.length % 2 === 1) {
        return (newArray[Math.floor(newArray.length / 2)]);
    } else {
        return (newArray[newArray.length / 2] + newArray[newArray.length / 2 - 1]) / 2;
    }
};