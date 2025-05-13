/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    const leftSum = [];
    const result = [];
    let currentValue = 0;
    for (let i = 0; i < nums.length; i++) {
        leftSum.push(currentValue);
        currentValue += nums[i];
    }
    currentValue = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        result.unshift(Math.abs(leftSum[i] - currentValue));
        currentValue += nums[i];
    }
    return result;
};