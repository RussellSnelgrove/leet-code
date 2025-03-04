/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let increasingCount = 1;
    let decreasingCount = 1;
    let maxCount = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            increasingCount += 1;
            maxCount = Math.max(maxCount, increasingCount, decreasingCount);
            decreasingCount = 1;
            continue;
        }
        if (nums[i] < nums[i - 1]) {
            decreasingCount += 1;
            maxCount = Math.max(maxCount, increasingCount, decreasingCount);
            increasingCount = 1;
            continue;
        }
        increasingCount = 1;
        decreasingCount = 1;
    }
    maxCount = Math.max(maxCount, increasingCount, decreasingCount);
    return maxCount;
};