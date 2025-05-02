/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const newArray = nums1.concat(nums2).sort((a, b) => a - b);
    console.log(newArray);
    if (newArray.length % 2 === 1) {
        console.log(newArray);
        return (newArray[Math.floor(newArray.length / 2)]);
    } else {
        console.log(newArray);
        return (newArray[newArray.length / 2] + newArray[newArray.length / 2 - 1]) / 2;
    }
};