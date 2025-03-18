/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
    let leftPointer = 0;
    let rightPointer = 0;
    let maxSubArray = 0;
    let current = 0;
    while (rightPointer < nums.length) {
        while ((current & nums[rightPointer]) !== 0) {
            current = current ^ nums[leftPointer];
            leftPointer++;
        }
        current = current ^ nums[rightPointer];
        maxSubArray = Math.max(rightPointer-leftPointer+1, maxSubArray);
        rightPointer++;
    }
    return maxSubArray;
};