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
var minOperations = function (nums, k) {
    let operationCount = 0;
    nums.sort((a,b) => {return a-b});
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < k) {
            operationCount++;
            continue;
        }
        break;
    }
    return operationCount;
};