/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let operationCount = 0;
    nums.sort((a,b) => {return a-b});
    while(nums[0] < k) {
        nums.shift();
        operationCount++;
    }
    return operationCount;
};