/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let prefixMax = nums[0];
    let maxDiff = 0;
    let result = 0;
    for (let i = 1; i < nums.length; i++) {
        result = Math.max(result, maxDiff * nums[i]);
        prefixMax = Math.max(prefixMax, nums[i])
        maxDiff = Math.max(maxDiff, prefixMax - nums[i]);
    }
    return result;
};