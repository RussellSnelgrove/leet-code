/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let leftPointer = 0;
    let rightPointer = 0;
    let currentValue = nums[0];
    let currentMin;
    while (rightPointer < nums.length) {
        if (currentValue < target) {
            rightPointer++;
            currentValue += nums[rightPointer]
        } else {
            if (currentValue >= target) currentMin = Math.min(rightPointer - leftPointer + 1, currentMin ?? Infinity);
            currentValue -= nums[leftPointer];
            leftPointer++;
        }
    }
    return currentMin ?? 0;
};