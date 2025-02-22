/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const numsArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (numsArray.includes(nums[i])) return true;
        numsArray.push(nums[i]);
        if (numsArray.length <= k) continue;
        numsArray.shift();
    }
    return false
};