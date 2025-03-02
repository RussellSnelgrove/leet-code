/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    // let nums1Pointer = 0;
    let nums2Pointer = 0;
    const nums = new Map();
    for (let i = 0; i < nums1.length; i++) {
        nums.set(nums1[i][0], nums1[i][1]);
    }
    for (let i = 0; i < nums2.length; i++) {
        nums.set(nums2[i][0], (nums.get(nums2[i][0]) ?? 0) + nums2[i][1]);
    }
    // while (nums1Pointer < nums1.length|| nums2Pointer < nums2.length) {
    //     if (nums1Pointer < nums1.length) {
    //         nums.set(nums1[nums1Pointer], (nums.get(nums1[nums1Pointer][0]) ?? 0) + nums1[nums1Pointer][1]);
    //         nums1Pointer++;
    //     }
    //     if (nums2Pointer < nums2Pointer.length) {
    //         nums.set(nums2[nums2Pointer], (nums.get(nums2[nums2Pointer][0]) ?? 0) + nums2[nums2Pointer][1]);
    //         nums2Pointer++;
    //     }
    // }
    const numsArray = [];
    nums.forEach((value, key) => {
        numsArray.push([key, value]);
    })
    numsArray.sort((a, b) => a[0] - b[0])
    return numsArray;
};